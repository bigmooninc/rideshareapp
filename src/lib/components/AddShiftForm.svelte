<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Datepicker from "svelte-calendar";

  const dispatch = createEventDispatcher();

  // Props
  export let miles,
    milesPerGallon,
    gasPrice,
    grossEarned,
    shiftLength,
    milesInput;

  // Functions
  onMount(() => {
    setTimeout(() => {
      milesInput.focus();
    }, 200);
  });

  function add() {
    const gasUsed = miles / milesPerGallon;
    const gasCost = gasUsed * gasPrice;
    const netEarned = grossEarned - gasCost;
    const netPerHour = netEarned / shiftLength;
    const netPerMile = netEarned / miles;

    dispatch("addShift", {
      miles,
      milesPerGallon,
      gasPrice,
      grossEarned,
      shiftLength,
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
</script>

<div in:fade={{ duration: 200 }} class="container">
  <h3>Add Shift Info:</h3>
  <form on:submit|preventDefault={add}>
    <div class="mb-3">
      <input
        type="text"
        placeholder="Miles driven"
        bind:this={milesInput}
        bind:value={miles}
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="Miles per gallon"
        bind:value={milesPerGallon}
      />
    </div>
    <div class="mb-3">
      <input type="text" placeholder="Shift Length" bind:value={shiftLength} />
    </div>
    <div class="mb-3">
      <input type="text" placeholder="Gas Price" bind:value={gasPrice} />
    </div>
    <div class="mb-3">
      <input type="text" placeholder="Gross Earned" bind:value={grossEarned} />
    </div>
    <div class="mb-3">
      <Datepicker />
    </div>
    <div class="flex flex-row justify-between items-center">
      <button type="submit">Add Shift</button>
      <a href="." on:click|preventDefault={cancel}>Cancel</a>
    </div>
  </form>
</div>

<style>
  .container {
    width: 100%;
    max-width: 300px;
    background: #fff;
    @apply absolute right-0 top-0 p-8 z-20 rounded-lg shadow-lg;
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
