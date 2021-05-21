<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { quintIn, quintOut } from "svelte/easing";
  import shiftData from "$lib/stores/shift-data";

  const dispatch = createEventDispatcher();

  // Props
  // export let timeOfDay = "AM";

  // Vars
  // let timeOfDayInput;
  let selectedTimeOfDay = "AM";

  // Functions
  onMount(() => {
    $shiftData.timeOfDay = selectedTimeOfDay;
    // setTimeout(() => {
    // })
  });

  function add() {
    dispatch("addTimeOfDay", {
      timeOfDay,
    });
  }

  function setToMorning() {
    selectedTimeOfDay = "AM";
    $shiftData.timeOfDay = selectedTimeOfDay;
  }

  function setToMidday() {
    selectedTimeOfDay = "Midday";
    $shiftData.timeOfDay = selectedTimeOfDay;
  }

  function setToEvening() {
    selectedTimeOfDay = "PM";
    $shiftData.timeOfDay = selectedTimeOfDay;
  }
</script>

<div
  in:fly={{ delay: 200, x: -600, duration: 1000, easing: quintOut }}
  out:fade={{ duration: 0 }}
  class="relative"
>
  <div class="w-full flex flex-col justify-center items-center">
    <h3>What time of day did you drive?</h3>
    <div class="flex flex-row items-center justify-center mb-10">
      <a
        href="."
        on:click|preventDefault={setToMorning}
        class="morning {selectedTimeOfDay === 'AM'
          ? 'green'
          : 'bg-transparent text-white'}">AM</a
      >
      <a
        href="."
        on:click|preventDefault={setToMidday}
        class="midday {selectedTimeOfDay === 'Midday'
          ? 'green'
          : 'bg-transparent text-white'}">Midday</a
      >
      <a
        href="."
        on:click|preventDefault={setToEvening}
        class="evening {selectedTimeOfDay === 'PM'
          ? 'green'
          : 'bg-transparent text-white'}">PM</a
      >
    </div>
  </div>
</div>

<style>
  .green {
    background-color: #66fcf1;
    color: #1f2833;
  }
  h3 {
    @apply font-light text-3xl text-white text-center mb-10 leading-tight;
  }
  a {
    @apply transition-all duration-300;
  }
  a:focus {
    outline: none;
  }
  .morning,
  .midday,
  .evening {
    border-color: #66fcf1;
    @apply py-3 border-b border-t border-gray-400;
  }
  .midday {
    border-color: #66fcf1;
    @apply border-l border-r px-4;
  }
  .morning {
    border-color: #66fcf1;
    @apply border-l rounded-l-full pr-4 pl-5;
  }
  .evening {
    border-color: #66fcf1;
    @apply border-r rounded-r-full pl-4 pr-5;
  }
</style>
