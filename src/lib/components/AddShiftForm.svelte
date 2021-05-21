<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Datepicker from "svelte-calendar";
  import shiftData from "$lib/stores/shift-data";

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
  // let miles, milesPerGallon, gasPrice, grossEarned, shiftLength, timeOfDay;

  // Vars
  let showMiles = true;
  let showMpg = false;
  let showShiftLength = false;
  let showGrossEarned = false;
  let showGasPrice = false;
  let showSave = false;
  let showTimeOfDay = false;
  let gasUsed, gasCost, netEarned, netPerHour, netPerMile;
  let layer = 1;

  // Functions

  function addShift() {
    gasUsed = $shiftData.miles / $shiftData.milesPerGallon;
    gasCost = gasUsed * $shiftData.gasPrice;
    netEarned = $shiftData.grossEarned - gasCost;
    netPerHour = netEarned / $shiftData.shiftLength;
    netPerMile = netEarned / $shiftData.miles;

    dispatch("addShift", {
      miles: $shiftData.miles,
      milesPerGallon: $shiftData.milesPerGallon,
      gasPrice: $shiftData.gasPrice,
      shiftLength: $shiftData.shiftLength,
      grossEarned: $shiftData.grossEarned,
      timeOfDay: $shiftData.timeOfDay,
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
  function cancelAddShift() {
    dispatch("cancelAddShiftForm");
  }
</script>

<div
  in:fade={{ duration: 200 }}
  class="container relative w-full max-w-full md:max-w-sm overflow-hidden"
>
  {#if layer < 7}
    <p class="absolute bottom-0 left-0 w-full text-center text-white mb-6">
      <a href="." on:click|preventDefault={cancel}>Cancel</a>
    </p>
  {/if}

  {#if layer === 1}
    <AddMiles />
  {:else if layer === 2}
    <AddMpg />
  {:else if layer === 3}
    <AddGasPrice />
  {:else if layer === 4}
    <AddGrossEarned />
  {:else if layer === 5}
    <AddShiftLength />
  {:else if layer === 6}
    <AddTimeOfDay />
  {:else if layer === 7}
    <SaveShift on:saveShift={addShift} on:cancelShift={cancelAddShift} />
  {/if}
  {#if layer < 7}
    <div class="flex flex-row justify-center items-center">
      <button
        on:click={() => (layer -= 1)}
        class="text-white {layer <= 1 ? 'cursor-default opacity-50' : ''}"
        disabled={layer <= 1}
      >
        <i class="far fa-long-arrow-left text-3xl mr-2" />
      </button>
      <a
        href="."
        on:click|preventDefault={() => (layer += 1)}
        class="text-white"
      >
        <i class="far fa-long-arrow-right text-3xl ml-2" />
      </a>
    </div>
  {/if}
</div>

<style>
  .container {
    /* width: 100%;
    max-width: 300px; */
    height: 400px;
    background-color: rgba(11, 12, 16, 0.95);
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
    @apply font-medium text-sm text-white px-3 py-3 rounded bg-black border border-black focus:outline-none;
  }
</style>
