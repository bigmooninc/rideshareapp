<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Datepicker from "svelte-calendar";

  const dispatch = createEventDispatcher();

  // Components
  import AddMiles from "$lib/components/AddMiles.svelte";
  import AddMpg from "$lib/components/AddMpg.svelte";
  import AddShiftLength from "$lib/components/AddShiftLength.svelte";
  import AddGasPrice from "$lib/components/AddGasPrice.svelte";
  import AddGrossEarned from "$lib/components/AddGrossEarned.svelte";
  import SaveShift from "$lib/components/SaveShift.svelte";
  import AddTimeOfDay from "$lib/components/AddTimeOfDay.svelte";
  import { prevent_default } from "svelte/internal";

  // Props
  export let miles,
    milesPerGallon,
    gasPrice,
    grossEarned,
    shiftLength,
    timeOfDay;

  // Vars
  let showMiles = true;
  let showMpg = false;
  let showShiftLength = false;
  let showGrossEarned = false;
  let showGasPrice = false;
  let showSave = false;
  let showTimeOfDay = false;
  let gasUsed, gasCost, netEarned, netPerHour, netPerMile;

  // Functions
  onMount(() => {
    // setTimeout(() => {
    //   milesInput.focus();
    // }, 200);
  });

  function addShift() {
    gasUsed = miles / milesPerGallon;
    gasCost = gasUsed * gasPrice;
    netEarned = grossEarned - gasCost;
    netPerHour = netEarned / shiftLength;
    netPerMile = netEarned / miles;

    dispatch("addShift", {
      miles,
      milesPerGallon,
      gasPrice,
      gasCost,
      grossEarned,
      shiftLength,
      gasUsed,
      gasCost,
      netEarned,
      netPerHour,
      netPerMile,
      timeOfDay,
    });
  }

  function cancel() {
    dispatch("cancelAddShift");
  }

  function handleAddMiles(event) {
    miles = event.detail.miles;
    showMiles = false;
    showMpg = true;
  }

  function handleAddMpg(event) {
    milesPerGallon = event.detail.milesPerGallon;
    showMpg = false;
    showGasPrice = true;
    console.log("Miles", miles);
  }
  function handleAddGasPrice(event) {
    gasPrice = event.detail.gasPrice;
    showGasPrice = false;
    showGrossEarned = true;
  }
  function handleGrossEarned(event) {
    grossEarned = event.detail.grossEarned;
    showGrossEarned = false;
    showShiftLength = true;
  }
  function handleShiftLength(event) {
    shiftLength = event.detail.shiftLength;
    showShiftLength = false;
    showTimeOfDay = true;
  }
  function handleTimeOfDay(event) {
    timeOfDay = event.detail.timeOfDay;
    showTimeOfDay = false;
    showSave = true;
  }
</script>

<div
  in:fade={{ duration: 200 }}
  class="container relative w-full max-w-full md:max-w-xs h-96 overflow-hidden"
>
  <p class="absolute bottom-0 left-0 w-full text-center text-white mb-6">
    <a href="." on:click|preventDefault={cancel}>Cancel</a>
  </p>
  {#if showMiles}
    <AddMiles {miles} on:addMiles={handleAddMiles} />
  {/if}

  {#if showMpg}
    <AddMpg {milesPerGallon} on:addMpg={handleAddMpg} />
  {/if}

  {#if showGasPrice}
    <AddGasPrice {gasPrice} on:addGasPrice={handleAddGasPrice} />
  {/if}

  {#if showGrossEarned}
    <AddGrossEarned {grossEarned} on:addGrossEarned={handleGrossEarned} />
  {/if}

  {#if showShiftLength}
    <AddShiftLength {shiftLength} on:addShiftLength={handleShiftLength} />
  {/if}

  {#if showTimeOfDay}
    <AddTimeOfDay {timeOfDay} on:addTimeOfDay={handleTimeOfDay} />
  {/if}

  {#if showSave}
    <SaveShift
      {miles}
      {milesPerGallon}
      {grossEarned}
      {gasPrice}
      {shiftLength}
      {timeOfDay}
      on:saveShift={addShift}
    />
  {/if}
</div>

<style>
  .container {
    /* width: 100%;
    max-width: 300px; */
    /* height: 330px; */
    background-color: rgba(11, 12, 16, 0.9);
    border: 2px solid #1f2833;
    @apply absolute right-0 top-0 p-8 z-20 rounded-lg shadow-md flex flex-col justify-center items-center;
  }
  h3 {
    @apply font-bold text-2xl mb-3;
  }
  input {
    @apply border border-gray-200 font-light text-base w-full p-2 rounded focus:outline-none;
  }
  button {
    @apply font-medium text-sm text-white px-8 py-3 rounded bg-black border border-black focus:outline-none;
  }
</style>
