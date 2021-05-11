<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";

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

  function add() {
    dispatch("addMpg");
  }
</script>

<div
  in:fly={{ delay: 300, y: -500, duration: 750, easing: quintOut }}
  class="relative w-full flex flex-col justify-center items-centerffghvbb"
>
  <h3>How many miles per gallon?</h3>
  <input type="text" bind:value={milesPerGallon} bind:this={mpgInput} />
  <button href="." on:click|preventDefault={add}>
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
