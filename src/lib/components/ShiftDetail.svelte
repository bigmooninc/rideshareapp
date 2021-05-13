<script>
  import { format, toDate } from "date-fns";

  // PROPS
  export let shift;

  // Functions
  function formatDate(date) {
    // const formattedDate = format(new Date(date), "T");
    let newDate = new Date(date);
    console.log(newDate);
  }
</script>

<div class="item flex flex-row items-center px-5 py-3 rounded mb-2">
  <div class="w-20">
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
</div>

<style>
  .item {
    background: #1f2833;
  }
  p {
    font-family: "Teko", sans-serif;
    @apply text-2xl;
  }
</style>
