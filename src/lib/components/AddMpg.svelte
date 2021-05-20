<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { quintOut, quintIn, sineIn } from "svelte/easing";
  import shiftData from "$lib/stores/shift-data";

  const dispatch = createEventDispatcher();

  // Props
  export let milesPerGallon;

  // Vars
  let mpgInput;

  // Functions
  onMount(() => {
    setTimeout(() => {
      mpgInput.focus();
    }, 200);
  });

  // function add() {
  //   dispatch("addMpg", {
  //     milesPerGallon,
  //   });
  // }

  // function handleUpdateMpg() {
  //   shiftData.update((s) => (s.milesPerGallon = milesPerGallon));
  //   console.log("Shift Data MPG: ", $shiftData);
  // }
</script>

<div in:fade={{ delay: 200, duration: 300 }} out:fade={{ duration: 0 }}>
  <div class="w-full flex flex-col justify-center items-center">
    <h3>How many miles per gallon?</h3>
    <input
      type="text"
      bind:value={$shiftData.milesPerGallon}
      bind:this={mpgInput}
    />
  </div>
</div>

<style>
  h3 {
    @apply font-light text-xl text-white text-center mb-10 leading-tight;
  }
  input {
    font-family: "Teko", sans-serif;
    border-color: #337475;
    @apply text-6xl w-full rounded-full bg-transparent border-2 text-center focus:outline-none font-bold text-white pb-2 pt-3 mb-10;
  }
  a {
    @apply focus:outline-none;
  }
</style>
