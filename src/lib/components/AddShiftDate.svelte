<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import shiftData from "$lib/stores/shift-data";

  const dispatch = createEventDispatcher();
</script>

<div out:fade={{ duration: 0 }} class="relative">
  <div class="w-full flex flex-col justify-center items-center">
    <h3>What day did you drive?</h3>
    <input type="text" bind:value={$shiftData.shiftDate} />
  </div>
</div>

<style>
  h3 {
    @apply font-light text-3xl text-white text-center mb-10 leading-tight;
  }
  input {
    font-family: "Teko", sans-serif;
    border-color: #337475;
    @apply text-6xl w-full bg-transparent text-center focus:outline-none font-bold text-white pb-2 pt-3 mb-5 rounded-full border-2;
  }
  button {
    @apply focus:outline-none;
  }
</style>
