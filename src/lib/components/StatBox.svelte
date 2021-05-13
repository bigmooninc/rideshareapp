<script>
  // Props
  export let title = "Gas Price";
  export let value = 3.22;
  export let isDollarValue = false;
</script>

<div class="box">
  <p><span class="font-light">{isDollarValue ? "$" : ""}</span>{value}</p>
  <h3>{title}</h3>
</div>

<style>
  .box {
    background-color: #1f2833;
    border-color: #1f2833;
    @apply border-2 rounded px-6 py-8 flex flex-col justify-center items-center;
  }
  h3 {
    color: #66fcf1;
    font-family: "Teko", sans-serif;
    font-weight: 300;
    @apply text-xl uppercase opacity-50 text-center mt-2 tracking-wide;
  }
  p {
    font-family: "Teko", sans-serif;
    @apply font-bold text-white text-4xl text-center leading-none;
  }
</style>
