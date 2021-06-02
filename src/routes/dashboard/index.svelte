<script context="module">
  export async function load({ session }) {
    const { user } = session;
    if (!user) {
      return {
        status: 302,
        redirect: ".",
      };
    }
    return {};
  }
</script>

<script>
  import { onMount } from "svelte";
  import { session } from "$app/stores";
  import shiftData from "$lib/stores/shift-data";
  import {
    format,
    startOfWeek,
    endOfWeek,
    startOfYear,
    endOfYear,
    getYear,
  } from "date-fns";
  import { fade } from "svelte/transition";
  import {
    collection,
    addDoc,
    setDoc,
    doc,
    deleteDoc,
    getFirestore,
    query,
    where,
    orderBy,
    getDocs,
  } from "firebase/firestore";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { v4 as uuidv4 } from "uuid";

  // *** DATA STORES ***
  import currentWeekShifts from "$lib/stores/current-shifts";
  import currentYearShifts from "$lib/stores/year-shifts";

  // *** COMPONENTS ***
  import StatBox from "$lib/components/StatBox.svelte";
  import AddShiftForm from "$lib/components/AddShiftForm.svelte";
  import ShiftDetail from "$lib/components/ShiftDetail.svelte";

  // *** VARS ***
  let shiftArray = [];
  let shiftMiles = [];
  let shiftMpgs = [];
  let shiftGasCost = [];
  let shiftGrossEarned = [];
  let shiftNetPerHour = [];
  let shiftNetPerMile = [];
  let showAddShiftForm = false;
  let miles, milesPerGallon, gasPrice, grossEarned, shiftLength, timeOfDay;
  let currentUser = $session.user;
  let shiftView = "All";

  let yearShiftArray = [];
  let currentYearMiles = [];
  let currentYearMpg = [];
  let currentYearGasCost = [];
  let currentYearGrossEarned = [];
  let currentYearNetPerHour = [];
  let currentYearNetPerMile = [];
  // let currentWeekStart;
  // let currentWeekEnd;

  let gasUsed, gasCost, netEarned, netPerHour, netPerMile;

  // *** FUNCTIONS ***
  onMount(async () => {
    const currentYearStart = format(startOfYear(new Date()), "T");
    const currentYearEnd = format(endOfYear(new Date()), "T");

    const db = await getFirestore();
    const yearShiftRef = await collection(db, "shifts");
    const yearQ = await query(
      yearShiftRef,
      where("user", "==", $session.user),
      where(
        "shiftDate",
        ">=",
        `${currentYearStart}`,
        "&&",
        "shiftDate",
        "<=",
        `${currentYearEnd}`
      )
    );

    const yearQuerySnapshot = await getDocs(yearQ);
    yearQuerySnapshot.forEach((doc) => {
      const newShift = doc.data();
      yearShiftArray = [...yearShiftArray, newShift];
      yearShiftArray = yearShiftArray;
    });
    console.log("Year Q", yearShiftArray);
    currentYearShifts.setCurrentYearShifts(yearShiftArray);

    const currentWeekEnd = format(
      endOfWeek(new Date(), { weekStartsOn: 1 }),
      "T"
    );

    const currentWeekStart = format(
      startOfWeek(new Date(), { weekStartsOn: 1 }),
      "T"
    );

    const shiftsRef = await collection(db, "shifts");
    const q = await query(
      shiftsRef,
      where("user", "==", $session.user),
      where(
        "shiftDate",
        ">=",
        `${currentWeekStart}`,
        "&&",
        "shiftDate",
        "<=",
        `${currentWeekEnd}`
      ),
      orderBy("shiftDate", "desc")
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log("Doc 1: ", doc.data());
      const newShift = doc.data();
      shiftArray = [...shiftArray, newShift];
      shiftArray = shiftArray;
    });
    currentWeekShifts.setCurrentWeekShifts(shiftArray);
    console.log("Current: ", $currentWeekShifts);
  });

  function clearState() {
    shiftData.set({
      miles: "",
      milesPerGallon: "",
      shiftLength: "",
      timeOfDay: "",
      gasPrice: "",
      grossEarned: "",
    });
  }

  async function handleAddShift(event) {
    event.preventDefault();
    const getId = uuidv4();
    const shiftData = {
      shiftId: getId,
      gasUsed: event.detail.gasUsed,
      gasCost: event.detail.gasCost,
      netEarned: event.detail.netEarned,
      netPerHour: event.detail.netPerHour,
      netPerMile: event.detail.netPerMile,
      miles: event.detail.miles,
      milesPerGallon: event.detail.milesPerGallon,
      gasPrice: event.detail.gasPrice,
      grossEarned: event.detail.grossEarned,
      shiftLength: event.detail.shiftLength,
      timeOfDay: event.detail.timeOfDay,
      user: $session.user,
      shiftDate: format(new Date(), "T"),
    };
    console.log("ShiftData: ", shiftData);
    const db = await getFirestore();
    const docRef = await setDoc(doc(db, `shifts`, `${getId}`), shiftData);
    currentWeekShifts.addCurrentWeekShift(shiftData);
    showAddShiftForm = false;
    clearState();
    console.log(docRef);
  }

  function cancelAddShiftForm() {
    showAddShiftForm = false;
    shiftData.set({
      miles: "",
      milesPerGallon: "",
      shiftLength: "",
      grossEarned: "",
      timeOfDay: "",
      gasPrice: "",
    });
  }

  async function handleRemoveShift(shift) {
    const db = await getFirestore();
    await deleteDoc(doc(db, "shifts", shift.shiftId));
    currentWeekShifts.removeCurrentWeekShift(shift);
  }

  //  REACTIVITY

  // CURRENT YEAR NUMBERS
  $: {
    currentYearMiles = [];
    $currentYearShifts.forEach((s) => {
      currentYearMiles = [...currentYearMiles, parseFloat(s.miles)];
      currentYearMiles = currentYearMiles;
    });
  }
  $: totalYearMiles = currentYearMiles.reduce((a, b) => a + b, 0);

  $: {
    currentYearMpg = [];
    $currentYearShifts.forEach((s) => {
      currentYearMpg = [...currentYearMpg, parseFloat(s.milesPerGallon)];
      currentYearMpg = currentYearMpg;
    });
  }
  $: yearMpg = currentYearMpg.reduce((a, b) => a + b, 0);
  $: averageYearMilesPerGallon = (yearMpg / currentYearMpg.length).toFixed(1);

  $: {
    currentYearGasCost = [];
    $currentYearShifts.forEach((s) => {
      currentYearGasCost = [...currentYearGasCost, s.gasCost];
      currentYearGasCost = currentYearGasCost;
    });
  }
  $: totalYearGasCost = currentYearGasCost
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  $: {
    currentYearGrossEarned = [];
    $currentYearShifts.forEach((s) => {
      currentYearGrossEarned = [
        ...currentYearGrossEarned,
        parseFloat(s.grossEarned),
      ];
      currentYearGrossEarned = currentYearGrossEarned;
    });
  }
  $: totalYearGrossEarned = currentYearGrossEarned
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  $: {
    currentYearNetPerMile = [];
    $currentYearShifts.forEach((s) => {
      currentYearNetPerMile = [
        ...currentYearNetPerMile,
        parseFloat(s.netPerMile),
      ];
      currentYearNetPerMile = currentYearNetPerMile;
    });
  }
  $: yearNetPerMile = currentYearNetPerMile.reduce((a, b) => a + b, 0);
  $: yearAverageNetPerMile = (
    yearNetPerMile / currentYearNetPerMile.length
  ).toFixed(2);

  $: {
    currentYearNetPerHour = [];
    $currentYearShifts.forEach((s) => {
      currentYearNetPerHour = [
        ...currentYearNetPerHour,
        parseFloat(s.netPerHour),
      ];
      currentYearNetPerHour = currentYearNetPerHour;
    });
  }
  $: yearNetPerHour = currentYearNetPerHour.reduce((a, b) => a + b, 0);
  $: yearAverageNetPerHour = (
    yearNetPerHour / currentYearNetPerHour.length
  ).toFixed(2);

  $: yearAmShifts = $currentYearShifts.filter((s) => s.timeOfDay === "AM");
  $: yearPmShifts = $currentYearShifts.filter((s) => s.timeOfDay === "PM");
  $: yearMidShifts = $currentYearShifts.filter((s) => s.timeOfDay === "Midday");

  // CURRENT WEEK NUMBERS
  // Calculating total miles
  $: {
    shiftMiles = [];
    $currentWeekShifts.forEach((s) => {
      shiftMiles = [...shiftMiles, parseFloat(s.miles)];
      shiftMiles = shiftMiles;
    });
  }
  $: totalMiles = shiftMiles.reduce((a, b) => a + b, 0);

  // Calculating average MPG
  $: {
    shiftMpgs = [];
    $currentWeekShifts.forEach((s) => {
      shiftMpgs = [...shiftMpgs, parseFloat(s.milesPerGallon)];
      shiftMpgs = shiftMpgs;
    });
  }
  $: mpgs = shiftMpgs.reduce((a, b) => a + b, 0);
  $: averageMilesPerGallon = (mpgs / shiftMpgs.length).toFixed(1);

  // Calculating gas cost
  $: {
    shiftGasCost = [];
    $currentWeekShifts.forEach((s) => {
      shiftGasCost = [...shiftGasCost, s.gasCost];
      shiftGasCost = shiftGasCost;
    });
  }
  $: totalGasCost = shiftGasCost.reduce((a, b) => a + b, 0).toFixed(2);

  // Calculating gross earned
  $: {
    shiftGrossEarned = [];
    $currentWeekShifts.forEach((s) => {
      shiftGrossEarned = [...shiftGrossEarned, parseFloat(s.grossEarned)];
      shiftGrossEarned = shiftGrossEarned;
    });
  }
  $: totalGrossEarned = shiftGrossEarned.reduce((a, b) => a + b, 0).toFixed(2);

  // Calculating net earned per hour
  $: {
    shiftNetPerHour = [];
    $currentWeekShifts.forEach((s) => {
      shiftNetPerHour = [...shiftNetPerHour, parseFloat(s.netPerHour)];
      shiftNetPerHour = shiftNetPerHour;
    });
  }

  $: net = shiftNetPerHour.reduce((a, b) => a + b, 0);
  $: averageNetPerHour = (net / shiftNetPerHour.length).toFixed(2);

  // Calculating Net Per Mile
  $: {
    shiftNetPerMile = [];
    $currentWeekShifts.forEach((s) => {
      shiftNetPerMile = [...shiftNetPerMile, parseFloat(s.netPerMile)];
      shiftNetPerMile = shiftNetPerMile;
    });
  }
  $: netPer = shiftNetPerMile.reduce((a, b) => a + b, 0);
  $: averageNetPerMile = (netPer / shiftNetPerMile.length).toFixed(2);

  $: amShifts = $currentWeekShifts.filter((s) => s.timeOfDay === "AM");
  $: pmShifts = $currentWeekShifts.filter((s) => s.timeOfDay === "PM");
  $: midShifts = $currentWeekShifts.filter((s) => s.timeOfDay === "Midday");
</script>

<div class="page relative h-screen">
  <div class="relative w-full max-w-5xl mx-auto pt-28 pb-20 px-3 md:px-0">
    <div class="relative flex flex-row justify-between items-center">
      <div class="flex-1 flex flex-row items-end">
        <!-- <h3 class="hidden md:block py-4">This Week's Totals & Averages -</h3> -->
        <h3 class="py-3">
          {getYear(new Date())}
          - YTD
        </h3>
      </div>

      {#if !showAddShiftForm}
        <button
          in:fade={{ delay: 100, duration: 200 }}
          on:click={() => (showAddShiftForm = true)}>Add Shift</button
        >
      {/if}
      {#if showAddShiftForm}
        <AddShiftForm
          on:cancelAddShiftForm={cancelAddShiftForm}
          on:cancelAddShift={cancelAddShiftForm}
          on:addShift={handleAddShift}
        />
      {/if}
    </div>

    <div
      class="stat_container grid grid-cols-2 md:grid-cols-6 gap-3 mb-8 pb-10"
    >
      <StatBox
        title="Miles"
        value={totalYearMiles > 0 ? totalYearMiles.toFixed(1) : 0}
      />
      <StatBox
        title="AVG MPG"
        value={averageYearMilesPerGallon > 0 ? averageYearMilesPerGallon : 0}
      />
      <StatBox
        title="Gas Cost"
        value={totalYearGasCost > 0 ? totalYearGasCost : 0.0}
        isDollarValue
      />
      <StatBox
        title="Earnings"
        value={totalYearGrossEarned > 0 ? totalYearGrossEarned : 0.0}
        isDollarValue
      />
      <StatBox
        title="Net per Hour"
        value={yearAverageNetPerHour > 0 ? yearAverageNetPerHour : 0.0}
        isDollarValue
      />
      <StatBox
        title="Net per Mile"
        value={yearAverageNetPerMile > 0 ? yearAverageNetPerMile : 0.0}
        isDollarValue
      />
    </div>

    <div class="relative flex flex-row justify-between items-center">
      <div class="flex-1 flex flex-row items-end">
        <!-- <h3 class="hidden md:block py-4">This Week's Totals & Averages -</h3> -->
        <h3 class="pb-3">
          {format(startOfWeek(new Date(), { weekStartsOn: 1 }), "MMM d")}
          - {format(
            new Date(endOfWeek(new Date(), { weekStartsOn: 1 })),
            "MMM d"
          )}
        </h3>
      </div>

      <!-- {#if !showAddShiftForm}
        <button
          in:fade={{ delay: 100, duration: 200 }}
          on:click={() => (showAddShiftForm = true)}>Add Shift</button
        >
      {/if}
      {#if showAddShiftForm}
        <AddShiftForm
          on:cancelAddShiftForm={cancelAddShiftForm}
          on:cancelAddShift={cancelAddShiftForm}
          on:addShift={handleAddShift}
        />
      {/if} -->
    </div>

    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-16">
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
    <div class="flex flex-col md:flex-row items-start md:items-end mb-3">
      <h3 class="w-full flex-1 mr-10 mb-5 md:mb-0 text-center md:text-left">
        This Week's Shifts
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
        {#each $currentWeekShifts as shift, index (shift.shiftId)}
          <div
            animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
            in:fade={{ duration: 200 }}
          >
            <ShiftDetail {shift} on:removeShift={handleRemoveShift(shift)} />
          </div>
        {/each}
      {:else if shiftView === "AM"}
        {#each amShifts as shift, index (shift)}
          <div
            animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
            in:fade={{ duration: 200 }}
          >
            <ShiftDetail {shift} on:removeShift={handleRemoveShift(shift)} />
          </div>
        {/each}
      {:else if shiftView === "Midday"}
        {#each midShifts as shift, index (shift)}
          <div
            animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
            in:fade={{ duration: 200 }}
          >
            <ShiftDetail {shift} on:removeShift={handleRemoveShift(shift)} />
          </div>
        {/each}
      {:else if shiftView === "PM"}
        {#each pmShifts as shift, index (shift)}
          <div
            animate:flip={{ delay: 250, duration: 250, easing: quintOut }}
            in:fade={{ duration: 200 }}
          >
            <ShiftDetail {shift} on:removeShift={handleRemoveShift(shift)} />
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  h3 {
    font-family: "Montserrat", sans-serif;
    @apply font-bold text-white relative text-2xl md:text-xl;
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
      width: 850px;
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
  .stat_container {
    border-bottom: 1px solid #1f2833;
  }
</style>
