<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { quintOut, quintIn, sineIn } from "svelte/easing";

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
    dispatch("addMpg", {
      milesPerGallon,
    });
  }
</script>

<div
  in:fly={{ delay: 200, x: -700, duration: 500, easing: quintOut, opacity: 1 }}
  out:fade={{ duration: 0 }}
>
  <div class="w-full flex flex-col justify-center items-center">
    <h3>How many miles per gallon?</h3>
    <input type="text" bind:value={milesPerGallon} bind:this={mpgInput} />
    <a href="." on:click|preventDefault={add} class="text-white">
      <i class="far fa-long-arrow-right text-3xl" />
    </a>
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
