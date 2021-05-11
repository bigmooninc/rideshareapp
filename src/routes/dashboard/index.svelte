<script context="module">
  export async function load({ session }) {
    const { user } = session;
    if (!user) {
      return {
        status: 302,
        redirect: "/login",
      };
    }
    return {};
  }
</script>

<script>
  import { onMount } from "svelte";
  import { session } from "$app/stores";
  import { format, startOfWeek, endOfWeek } from "date-fns";
  import { fade } from "svelte/transition";
  import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
  } from "firebase/firestore";

  // *** DATA STORES ***
  import currentWeekShifts from "$lib/stores/current-shifts";

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
  let showAddShiftForm = false;
  let miles, milesPerGallon, gasPrice, grossEarned, shiftLength;
  let currentUser = $session.user;

  // *** FUNCTIONS ***
  onMount(async () => {
    const currentWeekStart = format(
      startOfWeek(new Date(), { weekStartsOn: 1 }),
      "T"
    );
    const currentWeekEnd = format(
      endOfWeek(new Date(), { weekStartsOn: 1 }),
      "T"
    );

    console.log("Week: ", currentWeekStart, currentWeekEnd);
    console.log("User: ", $session.user);

    const db = await getFirestore();
    const q = await query(
      collection(db, "shifts"),
      where(
        "user",
        "==",
        $session.user,
        "&&",
        "`shiftDate`",
        ">=",
        `${currentWeekStart}`,
        "&&",
        "shiftDate",
        "<=",
        `${currentWeekEnd}`
      )
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log("Doc 1: ", doc.data());
      const newShift = doc.data();
      shiftArray = [...shiftArray, newShift];
      shiftArray = shiftArray;
    });
    currentWeekShifts.setCurrentWeekShifts(shiftArray);
  });

  function clearState() {
    miles = "";
    milesPerGallon = "";
    gasPrice = "";
    grossEarned = "";
    shiftLength = "";
  }

  async function handleAddShift(event) {
    event.preventDefault();
    const shiftData = {
      gasUsed: event.detail.gasUsed,
      gasCost: event.detail.gasCost,
      netEarned: event.detail.netEarned,
      netPerHour: event.detail.netPerHour,
      miles: event.detail.miles,
      milesPerGallon: event.detail.milesPerGallon,
      gasPrice: event.detail.gasPrice,
      grossEarned: event.detail.grossEarned,
      shiftLength: event.detail.shiftLength,
      netPerMile: event.detail.netPerMile,
      user: $session.user,
      shiftDate: new Date(),
    };
    console.log("Save: ", miles);
    // const db = await getFirestore();
    // const docRef = await addDoc(collection(db, `shifts`), shiftData);
    // currentWeekShifts.addCurrentWeekShift(shiftData);
    // showAddShiftForm = false;
    // clearState();
    // console.log(docRef);
  }

  //  REACTIVITY

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

  // Calculating net earned per gour
  $: {
    shiftNetPerHour = [];
    $currentWeekShifts.forEach((s) => {
      shiftNetPerHour = [...shiftNetPerHour, parseFloat(s.netPerHour)];
      shiftNetPerHour = shiftNetPerHour;
    });
  }
  $: net = shiftNetPerHour.reduce((a, b) => a + b, 0);
  $: averageNetPerHour = (net / shiftNetPerHour.length).toFixed(2);
</script>

<div class="page relative h-screen">
  <div class="relative w-full max-w-5xl mx-auto pt-28 pb-20 px-3 md:px-0">
    <div class="relative flex flex-row justify-between items-center mb-5">
      <h3>
        This Week's Totals & Averages -
        {format(startOfWeek(new Date(), { weekStartsOn: 1 }), "MMM d")}
        - {format(
          new Date(endOfWeek(new Date(), { weekStartsOn: 1 })),
          "MMM d"
        )}
      </h3>
      {#if !showAddShiftForm}
        <button
          in:fade={{ delay: 100, duration: 200 }}
          on:click={() => (showAddShiftForm = true)}>Add Shift</button
        >
      {/if}
      {#if showAddShiftForm}
        <AddShiftForm
          on:cancelAddShift={() => (showAddShiftForm = false)}
          on:addShift={handleAddShift}
          {miles}
          {milesPerGallon}
          {gasPrice}
          {grossEarned}
          {shiftLength}
        />
      {/if}
    </div>

    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
      <StatBox title="Miles" value={totalMiles > 0 ? totalMiles : 0} />
      <StatBox
        title="MPG"
        value={averageMilesPerGallon > 0 ? averageMilesPerGallon : 0}
      />
      <StatBox
        title="Gas Cost"
        value={totalGasCost > 0 ? totalGasCost : 0.0}
        isDollarValue
      />
      <StatBox
        title="Gross Earned"
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
        value={averageNetPerHour > 0 ? averageNetPerHour : 0.0}
        isDollarValue
      />
    </div>

    <h3>This Week's Shifts</h3>

    {#each $currentWeekShifts as shift, i}
      <ShiftDetail {shift} />
    {/each}
  </div>
</div>

<style>
  h3 {
    @apply font-light text-2xl text-white relative py-3;
  }
  .page {
    background-color: #0b0c10;
  }
  button {
    background-color: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
    @apply font-medium text-sm rounded border px-6 py-2 relative focus:outline-none;
  }
  canvas {
    background-color: white;
    width: 100%;
  }
  .item {
    background-color: #1f2833;
    border-color: #1f2833;
  }
</style>
