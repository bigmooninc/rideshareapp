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

  // Props
  export let miles, milesPerGallon, gasPrice, grossEarned, shiftLength;

  // Vars
  let showMiles = true;
  let showMpg = false;
  let showShiftLength = false;
  let showGrossEarned = false;
  let showGasPrice = false;
  let showSave = false;

  // Functions
  onMount(() => {
    // setTimeout(() => {
    //   milesInput.focus();
    // }, 200);
  });

  function addShift() {
    const gasUsed = miles / milesPerGallon;
    const gasCost = gasUsed * gasPrice;
    const netEarned = grossEarned - gasCost;
    const netPerHour = netEarned / shiftLength;
    const netPerMile = netEarned / miles;

    dispatch("addShift", {
      miles,
      milesPerGallon,
      gasPrice,
      grossEarned,
      shiftLength,
      gasUsed,
      gasCost,
      netEarned,
      netPerHour,
      netPerMile,
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
    showSave = true;
  }
</script>

<div in:fade={{ duration: 200 }} class="container overflow-hidden">
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

  {#if showSave}
    <SaveShift
      {miles}
      {milesPerGallon}
      {grossEarned}
      {gasPrice}
      {shiftLength}
      on:saveShift={addShift}
    />
  {/if}
</div>

<style>
  .container {
    width: 100%;
    max-width: 300px;
    height: 330px;
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
