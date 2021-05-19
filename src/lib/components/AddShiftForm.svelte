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
  onMount(() => {
    // setTimeout(() => {
    //   milesInput.focus();
    // }, 200);
  });

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

  // function handleAddMiles(event) {
  //   miles = event.detail.miles;
  //   showMiles = false;
  //   showMpg = true;
  // }

  // function handleAddMpg(event) {
  //   milesPerGallon = event.detail.milesPerGallon;
  //   showMpg = false;
  //   showGasPrice = true;
  //   console.log("Miles", miles);
  // }
  // function handleAddGasPrice(event) {
  //   gasPrice = event.detail.gasPrice;
  //   showGasPrice = false;
  //   showGrossEarned = true;
  // }
  // function handleGrossEarned(event) {
  //   grossEarned = event.detail.grossEarned;
  //   showGrossEarned = false;
  //   showShiftLength = true;
  // }
  // function handleShiftLength(event) {
  //   shiftLength = event.detail.shiftLength;
  //   showShiftLength = false;
  //   showTimeOfDay = true;
  // }
  // function handleTimeOfDay(event) {
  //   timeOfDay = event.detail.timeOfDay;
  //   showTimeOfDay = false;
  //   showSave = true;
  // }

  function nextPage() {
    return (layer += 1);
  }

  function prevPage() {
    return (layer -= 1);
  }
</script>

<div
  in:fade={{ duration: 200 }}
  class="container relative w-full max-w-full md:max-w-sm h-96 overflow-hidden"
>
  <p class="absolute bottom-0 left-0 w-full text-center text-white mb-6">
    <a href="." on:click|preventDefault={cancel}>Cancel</a>
  </p>

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
    <SaveShift on:saveShift={addShift} />
  {/if}
  {#if layer < 7}
    <div class="flex flex-row justify-center items-center">
      <a
        href="."
        on:click|preventDefault={() => (layer -= 1)}
        class="text-white"
        disabled={layer <= 1}
      >
        <i class="far fa-long-arrow-left text-3xl mr-2" />
      </a>
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
