<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintIn, quintOut } from "svelte/easing";

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
    dispatch("addMiles", {
      miles,
    });
  }
</script>

<div out:fade={{ duration: 0 }} class="relative">
  <div class="w-full flex flex-col justify-center items-center">
    <h3>How many miles did you drive?</h3>
    <input type="text" bind:value={miles} bind:this={milesInput} />
    <!-- <a href="." on:click|preventDefault={add} class="text-white">
      <i class="far fa-long-arrow-left text-3xl mr-2 opacity-25" />
      <i class="far fa-long-arrow-right text-3xl ml-2" />
    </a> -->
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
  a {
    @apply focus:outline-none;
  }
</style>
