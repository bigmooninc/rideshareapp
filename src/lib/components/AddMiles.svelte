<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";

  const dispatch = createEventDispatcher();

  // Props
  export let miles;

  // Vars
  let milesInput;

  // Functions
  onMount(() => {
    setTimeout(() => {
      milesInput.focus();
    }, 200);
  });

  function add() {
    dispatch("addMiles");
  }
</script>

<div class="relative w-full flex flex-col justify-center items-center">
  <h3>How many miles did you drive?</h3>
  <input type="text" bind:value={miles} bind:this={milesInput} />
  <button on:click|preventDefault={add}>
    <i class="far fa-long-arrow-right text-white text-3xl" />
  </button>
</div>

<style>
  h3 {
    @apply font-light text-xl text-white text-center mb-10 leading-tight;
  }
  input {
    font-family: "Teko", sans-serif;
    @apply text-6xl w-full bg-transparent text-center focus:outline-none font-bold text-white pb-2 mb-10;
  }
  button {
    @apply focus:outline-none;
  }
</style>
