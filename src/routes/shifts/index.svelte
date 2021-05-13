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
  import { format } from "date-fns";
  import { fade } from "svelte/transition";
  import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getDocs,
  } from "firebase/firestore";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";

  // Data Stores
  import shifts from "$lib/stores/shifts";

  // Components
  import StatBox from "$lib/components/StatBox.svelte";
  import ShiftDetail from "$lib/components/ShiftDetail.svelte";

  // Vars
  let shiftArray = [];
  // let shiftMiles = [];
  // let shiftMpgs = [];
  // let shiftGasCost = [];
  // let shiftGrossEarned = [];
  // let shiftNetPerHour = [];
  // let shiftNetPerMile = [];
  let showAddShiftForm = false;
  let miles, milesPerGallon, gasPrice, grossEarned, shiftLength, timeOfDay;
  // let currentUser = $session.user;

  // Functions
  onMount(async () => {
    const db = await getFirestore();
    const q = await query(
      collection(db, "shifts"),
      where("user", "==", $session.user)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const newShift = doc.data();
      shiftArray = [...shiftArray, newShift];
      shiftArray = shiftArray;
    });
    shifts.setShifts(shiftArray);
  });
</script>

<div class="page relative h-screen">
  <div class="relative w-full max-w-5xl mx-auto pt-28 pb-20 px-3 md:px-0">
    <div class="relative flex flex-row justify-between items-center mb-5">
      <div class="flex-1 flex flex-row items-center">
        <h3>Shift Totals & Averages</h3>
        <!-- <h3>
          {format(startOfWeek(new Date(), { weekStartsOn: 1 }), "MMM d")}
          - {format(
            new Date(endOfWeek(new Date(), { weekStartsOn: 1 })),
            "MMM d"
          )}
        </h3> -->
      </div>

      {#if !showAddShiftForm}
        <button
          in:fade={{ delay: 100, duration: 200 }}
          on:click={() => (showAddShiftForm = true)}>Add Shift</button
        >
      {/if}
      <!-- {#if showAddShiftForm}
        <AddShiftForm
          on:cancelAddShift={() => (showAddShiftForm = false)}
          on:addShift={handleAddShift}
          {miles}
          {milesPerGallon}
          {gasPrice}
          {grossEarned}
          {shiftLength}
          {timeOfDay}
        />
      {/if} -->
    </div>

    <div class="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
      <StatBox title="Miles" value={56.3} />
      <StatBox title="MPG" value={32.4} />
      <StatBox title="Gas Cost" value={2.55} isDollarValue />
      <StatBox title="Gross Earned" value={56.43} isDollarValue />
      <StatBox title="Net per Hour" value={20.23} isDollarValue />
      <StatBox title="Net per Mile" value={0.54} isDollarValue />
      <!-- <StatBox title="Miles" value={totalMiles > 0 ? totalMiles : 0} />
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
        value={averageNetPerMile > 0 ? averageNetPerMile : 0.0}
        isDollarValue
      /> -->
    </div>

    <h3>Recent Shifts</h3>

    <div class="overflow-y-scroll">
      <div
        class="item_header flex flex-row items-center px-5 py-2 rounded overflow-x-scroll"
      >
        <div class="w-16 md:w-20">
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
          <p class="text-white text-center">Net/Hour</p>
        </div>
        <div class="flex-1">
          <p class="text-white text-center">Net/Mile</p>
        </div>
      </div>
      {#each $shifts as shift, index (shift)}
        <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
          <ShiftDetail {shift} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  h3 {
    font-family: "Montserrat", sans-serif;
    @apply font-bold text-xl text-white relative py-3;
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
</style>
