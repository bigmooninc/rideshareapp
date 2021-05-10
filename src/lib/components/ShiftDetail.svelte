<script>
  import { format } from "date-fns";

  // PROPS
  export let shift;
</script>

<div class="item flex flex-row items-center px-5 py-3 rounded mb-3">
  <div class="flex-1">
    <p class="text-white">
      {format(new Date(shift.shiftDate.toDate()), "MMM d")}
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white">
      {shift.miles} miles
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white">
      {shift.milesPerGallon} MPG
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white">
      {shift.gasCost.toFixed(2)} Gas Cost
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white">
      {shift.grossEarned} Gross
    </p>
  </div>
  <div class="flex-1">
    <p class="text-white">
      {shift.netPerHour.toFixed(2)} Net Per Hour
    </p>
  </div>
</div>

<style>
  p {
    font-family: "Teko", sans-serif;
    @apply text-2xl text-center;
  }
  p:nth-child(1) {
    @apply text-left;
  }
</style>
