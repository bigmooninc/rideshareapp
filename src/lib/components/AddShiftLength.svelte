<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintOut, quintIn } from "svelte/easing";

  const dispatch = createEventDispatcher();

  // Props
  export let shiftLength;

  // Vars
  let shiftLengthInput;

  // Functions
  onMount(() => {
    setTimeout(() => {
      shiftLengthInput.focus();
    }, 200);
  });

  function add() {
    dispatch("addShiftLength", {
      shiftLength,
    });
  }
</script>

<div
  in:fade={{ delay: 200, duration: 300 }}
  out:fade={{ duration: 0 }}
  class="relative"
>
  <div class="w-full flex flex-col justify-center items-center">
    <h3>How long were you on the road?</h3>
    <input type="text" bind:value={shiftLength} bind:this={shiftLengthInput} />
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
