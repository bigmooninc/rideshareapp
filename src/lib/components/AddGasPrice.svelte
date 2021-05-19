<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";
  import shiftData from "$lib/stores/shift-data";

  const dispatch = createEventDispatcher();

  // Props
  export let gasPrice;

  // Vars
  let gasPriceInput;

  // Functions
  onMount(() => {
    setTimeout(() => {
      gasPriceInput.focus();
    }, 200);
  });

  function add() {
    dispatch("addGasPrice", {
      gasPrice,
    });
  }
</script>

<div
  in:fade={{ delay: 200, duration: 300 }}
  out:fade={{ duration: 0 }}
  class="relative"
>
  <div class="w-full flex flex-col justify-center items-center">
    <h3>What price did you last pay for gas?</h3>
    <input
      type="text"
      bind:value={$shiftData.gasPrice}
      bind:this={gasPriceInput}
    />
  </div>
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
