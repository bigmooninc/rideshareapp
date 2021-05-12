<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";

  const dispatch = createEventDispatcher();

  export let miles,
    milesPerGallon,
    grossEarned,
    gasPrice,
    shiftLength,
    timeOfDay;

  function add() {
    dispatch("saveShift");
  }
</script>

<div
  in:fly={{ delay: 200, x: -700, duration: 500, easing: quintOut, opacity: 1 }}
  out:fade={{ duration: 0 }}
  class="relative flex flex-col justify-center items-center w-full"
>
  <div class="w-full">
    <h3>Shift Details:</h3>
    <div class="line_item flex flex-row justify-between items-center w-full">
      <p class="text-white">Miles Driven:</p>
      <p class="text-white">{miles}</p>
    </div>
    <div class="line_item flex flex-row justify-between items-center w-full">
      <p class="text-white">MPG:</p>
      <p class="text-white">{milesPerGallon}</p>
    </div>
    <div class="line_item flex flex-row justify-between items-center w-full">
      <p class="text-white">Gas Price:</p>
      <p class="text-white">{gasPrice}</p>
    </div>
    <div class="line_item flex flex-row justify-between items-center w-full">
      <p class="text-white">Gross Earned:</p>
      <p class="text-white">{grossEarned}</p>
    </div>
    <div class="line_item flex flex-row justify-between items-center w-full">
      <p class="text-white">Shift Length:</p>
      <p class="text-white">{shiftLength}</p>
    </div>
    <div
      class="line_item flex flex-row justify-between items-center w-full mb-6"
    >
      <p class="text-white">Time of Day:</p>
      <p class="text-white">{timeOfDay}</p>
    </div>
    <div class="flex flex-row items-center">
      <button on:click={add}>Save Shift</button>
      <a href="." class="text-red-500 pl-5">Cancel</a>
    </div>
  </div>
</div>

<style>
  h3 {
    @apply font-bold text-white text-xl mb-4;
  }
  .line_item {
    border-bottom: 2px solid #1f2833;
  }
  p {
    font-family: "Teko", sans-serif;
    @apply text-xl py-1;
  }
  button {
    color: #1f2833;
    background-color: #66fcf1;
    border-color: #66fcf1;
    @apply px-8 py-2 font-bold border rounded-full;
  }
</style>
