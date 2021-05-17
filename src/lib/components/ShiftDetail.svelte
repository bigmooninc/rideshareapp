<script>
  import { createEventDispatcher } from "svelte";
  import { format, toDate } from "date-fns";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";

  const dispatch = createEventDispatcher();

  // PROPS
  export let shift;

  // Functions
  function formatDate(date) {
    // const formattedDate = format(new Date(date), "T");
    let newDate = new Date(date);
    console.log(newDate);
  }

  function remove() {
    dispatch("removeShift");
  }
</script>

<div
  class="relative item flex flex-row items-center px-5 py-3 rounded mb-2 overflow-hidden"
>
  <div class="w-16 md:w-20">
    <p class="text-white text-left">
      <!-- {format(new Date(shift.shiftDate.toDate()), "MMM d")} -->
      <!-- {shift.shiftDate} -->
      <!-- {formatDate(parseInt(shift.shiftDate))} -->
      {format(new Date(parseInt(shift.shiftDate)), "MMM d")}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      {shift.miles}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      {shift.milesPerGallon}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      ${shift.gasCost.toFixed(2)}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      ${shift.grossEarned}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      ${shift.netPerHour.toFixed(2)}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white text-center">
      ${shift.netPerMile.toFixed(2)}
    </p>
  </div>
  <div
    class="actions absolute top-0 right-0 bottom-0 flex justify-around items-center w-12"
  >
    <a href="." on:click|preventDefault={remove(shift)}
      ><i class="fal fa-times text-xl" /></a
    >
  </div>
</div>

<style>
  .item {
    width: 100%;
    background: #1f2833;
  }
  @media screen and (max-width: 767px) {
    .item {
      width: 750px;
      background: #1f2833;
    }
  }
  p {
    font-family: "Teko", sans-serif;
    @apply text-2xl;
  }
  .actions {
    border-left: 1px solid #36817f;
    color: #36817f;
    @apply transition-all duration-200;
  }
  .actions:hover {
    background-color: #36817f;
    color: #fff;
  }
</style>
