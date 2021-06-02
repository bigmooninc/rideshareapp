<script context="module">
  export async function load({ session }) {
    const { user } = session;
    if (!user) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    return {};
  }
</script>

<script>
  import { onMount } from "svelte";
  import { session } from "$app/stores";
  import {
    format,
    startOfMonth,
    endOfMonth,
    getMonth,
    getYear,
    getDaysInMonth,
    differenceInDays,
  } from "date-fns";
  import { fade } from "svelte/transition";
  import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  // Data Stores
  import currentMonthShifts from "$lib/stores/month-shifts";
  // import shifts from "$lib/stores/shifts";

  // Components
  import StatBox from "$lib/components/StatBox.svelte";
  import ShiftDetail from "$lib/components/ShiftDetail.svelte";
  import AddShiftForm from "$lib/components/AddShiftForm.svelte";

  // Vars
  let shiftArray = [];
  let shiftMiles = [];
  let shiftMpgs = [];
  let shiftGasCost = [];
  let shiftGrossEarned = [];
  let shiftNetPerHour = [];
  let shiftNetPerMile = [];
  let showAddShiftForm = false;
  let viewMonthShifts = false;
  let miles, milesPerGallon, gasPrice, grossEarned, shiftLength, timeOfDay;
  // let currentUser = $session.user;
  let shiftView = "All";

  // Functions
  onMount(async () => {
    // function filteredMonth(num) {
    //   getMonth(new Date()) - num
    // }

    // const monthStart = format(startOfMonth(new Date()), "T");

    // const monthEnd = format(endOfMonth(new Date()), "T");

    const currentMonthStart = format(startOfMonth(new Date()), "T");

    const currentMonthEnd = format(endOfMonth(new Date()), "T");

    const db = await getFirestore();
    const shiftsRef = await collection(db, "shifts");
    const q = await query(
      shiftsRef,
      where("user", "==", $session.user),
      where(
        "shiftDate",
        ">=",
        `${currentMonthStart}`,
        "&&",
        "shiftDate",
        "<=",
        `${currentMonthEnd}`
      )
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const newShift = doc.data();
      shiftArray = [...shiftArray, newShift];
      shiftArray = shiftArray;
    });
    // shifts.setShifts(shiftArray);
    currentMonthShifts.setCurrentMonthShifts(shiftArray);

    getMonthName();
  });

  function getMonthName(num) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = getMonth(new Date()) - num;
    const month = months[monthIndex];
    return month;
  }

  async function handleRemoveShift(shift) {
    const db = await getFirestore();
    await deleteDoc(doc(db, "shifts", shift.shiftId));
    currentMonthShifts.removeCurrentMonthShift(shift);
  }

  // Reactivity
  // Calculating total miles
  $: {
    shiftMiles = [];
    $currentMonthShifts.forEach((s) => {
      shiftMiles = [...shiftMiles, parseFloat(s.miles)];
      shiftMiles = shiftMiles;
    });
  }
  $: totalMiles = shiftMiles.reduce((a, b) => a + b, 0);

  // Calculating average MPG
  $: {
    shiftMpgs = [];
    $currentMonthShifts.forEach((s) => {
      shiftMpgs = [...shiftMpgs, parseFloat(s.milesPerGallon)];
      shiftMpgs = shiftMpgs;
    });
  }
  $: mpgs = shiftMpgs.reduce((a, b) => a + b, 0);
  $: averageMilesPerGallon = (mpgs / shiftMpgs.length).toFixed(1);

  // Calculating gas cost
  $: {
    shiftGasCost = [];
    $currentMonthShifts.forEach((s) => {
      shiftGasCost = [...shiftGasCost, s.gasCost];
      shiftGasCost = shiftGasCost;
    });
  }
  $: totalGasCost = shiftGasCost.reduce((a, b) => a + b, 0).toFixed(2);

  // Calculating gross earned
  $: {
    shiftGrossEarned = [];
    $currentMonthShifts.forEach((s) => {
      shiftGrossEarned = [...shiftGrossEarned, parseFloat(s.grossEarned)];
      shiftGrossEarned = shiftGrossEarned;
    });
  }
  $: totalGrossEarned = shiftGrossEarned.reduce((a, b) => a + b, 0).toFixed(2);

  // Calculating net earned per hour
  $: {
    shiftNetPerHour = [];
    $currentMonthShifts.forEach((s) => {
      shiftNetPerHour = [...shiftNetPerHour, parseFloat(s.netPerHour)];
      shiftNetPerHour = shiftNetPerHour;
    });
  }

  $: net = shiftNetPerHour.reduce((a, b) => a + b, 0);
  $: averageNetPerHour = (net / shiftNetPerHour.length).toFixed(2);

  // Calculating Net Per Mile
  $: {
    shiftNetPerMile = [];
    $currentMonthShifts.forEach((s) => {
      shiftNetPerMile = [...shiftNetPerMile, parseFloat(s.netPerMile)];
      shiftNetPerMile = shiftNetPerMile;
    });
  }
  $: netPer = shiftNetPerMile.reduce((a, b) => a + b, 0);
  $: averageNetPerMile = (netPer / shiftNetPerMile.length).toFixed(2);

  $: amShifts = $currentMonthShifts.filter((s) => s.timeOfDay === "AM");
  $: pmShifts = $currentMonthShifts.filter((s) => s.timeOfDay === "PM");
  $: midShifts = $currentMonthShifts.filter((s) => s.timeOfDay === "Midday");
</script>

<div class="page relative h-screen">
  <div class="relative w-full max-w-5xl mx-auto pt-28 pb-20 px-3 md:px-0">
    <div class="relative flex flex-row justify-between items-center">
      <div class="flex-1 flex flex-row items-center">
        <h3 class="py-3">
          {getMonthName(0)}
          {getYear(new Date())} -
          <span class="font-light opacity-50">Totals & Averages</span>
        </h3>
        <h3 class="ml-5">
          <span class="text-base">
            {differenceInDays(endOfMonth(new Date()), new Date())}
            days left
          </span>
        </h3>
      </div>

      {#if !showAddShiftForm}
        <button
          in:fade={{ delay: 100, duration: 200 }}
          on:click={() => (showAddShiftForm = true)}>Add Shift</button
        >
      {/if}
      {#if showAddShiftForm}
        <AddShiftForm on:cancelAddShift={() => (showAddShiftForm = false)} />
      {/if}
    </div>

    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
      <StatBox
        title="Miles"
        value={totalMiles > 0 ? totalMiles.toFixed(1) : 0}
      />
      <StatBox
        title="AVG MPG"
        value={averageMilesPerGallon > 0 ? averageMilesPerGallon : 0}
      />
      <StatBox
        title="Gas Cost"
        value={totalGasCost > 0 ? totalGasCost : 0.0}
        isDollarValue
      />
      <StatBox
        title="Earnings"
        value={totalGrossEarned > 0 ? totalGrossEarned : 0.0}
        isDollarValue
      />
      <StatBox
        title="Net per Hour"
        value={averageNetPerHour > 0 ? averageNetPerHour : 0.0}
        isDollarValue
      />
      <StatBox
        title="Net per Mile"
        value={averageNetPerMile > 0 ? averageNetPerMile : 0.0}
        isDollarValue
      />
    </div>

    {#if !viewMonthShifts}
      <a
        in:fade={{ duration: 200 }}
        href="."
        class="text-white text-sm bg-transparent border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
        on:click|preventDefault={() => (viewMonthShifts = true)}>View Shifts</a
      >
    {/if}

    {#if viewMonthShifts}
      <div in:fade={{ duration: 200 }} class="mb-8">
        <div class="flex flex-col md:flex-row items-start md:items-end mb-3">
          <h3>
            {getMonthName(0)}
            {getYear(new Date())} -
            <span class="font-light opacity-50">Shifts</span>
          </h3>
          <div
            class="flex flex-row items-center justify-center md:justify-end w-full md:flex-1 mb-2 md:mb-0"
          >
            <a
              href="."
              on:click|preventDefault={() => (shiftView = "All")}
              class="all {shiftView === 'All'
                ? 'active'
                : 'bg-transparent text-white'}">All</a
            >
            <a
              href="."
              on:click|preventDefault={() => (shiftView = "AM")}
              class="morning {shiftView === 'AM'
                ? 'active'
                : 'bg-transparent text-white'}">AM</a
            >
            <a
              href="."
              on:click|preventDefault={() => (shiftView = "Midday")}
              class="midday {shiftView === 'Midday'
                ? 'active'
                : 'bg-transparent text-white'}">MID</a
            >
            <a
              href="."
              on:click|preventDefault={() => (shiftView = "PM")}
              class="evening {shiftView === 'PM'
                ? 'active'
                : 'bg-transparent text-white'}">PM</a
            >
          </div>
        </div>

        <div class="overflow-y-scroll">
          <div
            class="item_header flex flex-row items-center px-5 py-2 rounded overflow-x-scroll"
          >
            <div class="w-24 md:w-24">
              <p class="text-white">
                <!-- {format(new Date(shift.shiftDate.toDate()), "MMM d")} -->
                <!-- {shift.shiftDate} -->
                <!-- {formatDate(parseInt(shift.shiftDate))} -->
                Date
              </p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">Miles</p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">MPG</p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">Gas Cost</p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">Earnings</p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">Net/Hr</p>
            </div>
            <div class="flex-1">
              <p class="text-white text-center">Net/Mi</p>
            </div>
          </div>

          {#if shiftView === "All"}
            {#each $currentMonthShifts as shift, index (shift.shiftId)}
              <div
                animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
                in:fade={{ duration: 200 }}
              >
                <ShiftDetail
                  {shift}
                  on:removeShift={handleRemoveShift(shift)}
                />
              </div>
            {/each}
          {:else if shiftView === "AM"}
            {#each amShifts as shift, index (shift)}
              <div
                animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
                in:fade={{ duration: 200 }}
              >
                <ShiftDetail
                  {shift}
                  on:removeShift={handleRemoveShift(shift)}
                />
              </div>
            {/each}
          {:else if shiftView === "Midday"}
            {#each midShifts as shift, index (shift)}
              <div
                animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
                in:fade={{ duration: 200 }}
              >
                <ShiftDetail
                  {shift}
                  on:removeShift={handleRemoveShift(shift)}
                />
              </div>
            {/each}
          {:else if shiftView === "PM"}
            {#each pmShifts as shift, index (shift)}
              <div
                animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
                in:fade={{ duration: 200 }}
              >
                <ShiftDetail
                  {shift}
                  on:removeShift={handleRemoveShift(shift)}
                />
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/if}

    {#if viewMonthShifts}
      <a
        in:fade={{ duration: 200 }}
        href="."
        class="text-white text-sm bg-transparent border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
        on:click|preventDefault={() => (viewMonthShifts = false)}>Hide Shifts</a
      >
    {/if}
  </div>
</div>

<style>
  h3 {
    font-family: "Montserrat", sans-serif;
    @apply font-bold text-xl text-white relative;
  }
  .page {
    background-color: #0b0c10;
  }
  button {
    background-color: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
    @apply font-medium text-sm rounded-full border px-6 py-2 relative focus:outline-none mb-2;
  }
  canvas {
    background-color: white;
    width: 100%;
  }
  .item_header {
    width: 100%;
    /* background-color: #1f2833; */
    /* border-color: #1f2833; */
  }
  @media screen and (max-width: 767px) {
    .item_header {
      width: 750px;
    }
  }
  p {
    font-family: "Teko", sans-serif;
    color: #66fcf1;
    @apply text-2xl opacity-50;
  }
  .active {
    background-color: #66fcf1;
    color: #1f2833;
  }
  .all,
  .morning,
  .midday,
  .evening {
    border-color: #66fcf1;
    @apply py-2 border-b border-t text-xs transition-all duration-200;
  }
  .all:hover,
  .morning:hover,
  .midday:hover,
  .evening:hover {
    background-color: #66fcf1;
    color: #1f2833;
  }
  .all {
    @apply border-l pl-5 pr-4 rounded-l-full;
  }
  .morning {
    @apply border-l border-r px-4;
  }
  .midday {
    @apply border-r px-4;
  }
  .evening {
    @apply border-r pr-5 pl-4 rounded-r-full;
  }
</style>
