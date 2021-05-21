<script context="module">
  export async function load({ session }) {
    let { user } = session;
    if (user) {
      return {
        status: 302,
        redirect: "dashboard",
      };
    }
    return {};
  }
</script>

<script>
  import { session } from "$app/stores";

  // Components
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="border-b border-gray-200 bg-white">
  <div class="w-full max-w-6xl mx-auto px-5 md:px-0 pt-36 md:pt-48 pb-20">
    <div class="flex flex-col md:flex-row items-center">
      <div class="w-full md:w-3/5 flex flex-col justify-center items-start">
        <h1>How much is your driving making you?</h1>
        <p class="mr-0 md:overflow-y-hidden">
          Get an accurate picture of how much you are actually making per hour
          when you drive, and what times are most profitable.
        </p>
        <div class="flex flex-row items-center">
          <a
            sveltekit:prefetch
            href="register"
            class="register_link border rounded-full font-bold text-base px-8 py-3"
            >Get Started</a
          >
          <a
            sveltekit:prefetch
            href="login"
            class="login_link text-black bg-none px-8 hover:underline"
            >Sign In</a
          >
        </div>
      </div>
      <div class="flex-1 mt-10 md:mt-0">
        <img src="/mac_dashboard.jpg" alt="" class="w-full ml-0 md:ml-10" />
      </div>
    </div>
  </div>
</div>
<div>
  <div class="w-full max-w-4xl mx-auto px-5 md:px-0 py-24">
    <div>
      <h3 class="font-bold text-3xl md:text-4xl mb-2 leading-none">
        What this app is not...
      </h3>
      <p class="body_copy">
        This application is not built to automatically track your miles. While
        there are apps out there that can do this for you, most newer cars have
        the ability to track trip miles. As well as tracking the trip miles,
        most cars have a feature to track miles per gallon during that trip.
        That being the case, this app leverages what your car will already do
        for you. All you have to do is enter the values at the end of your
        shift.
      </p>
      <p class="body_copy">
        Also, this app does not automatically pull your earnings from whichever
        rideshare app you are using. This has to be entered manually as well,
        but is easily attainable and easy to input.
      </p>
    </div>

    <h3 class="font-bold text-3xl md:text-4xl mb-2 leading-none mt-10">
      What this app is...
    </h3>

    <p class="body_copy">
      This app is a tool to take the metrics from the time that you are on the
      road during a given time...what is referred to as a "shift"...and give you
      an accurate picture of how much you are making per hour (and per mile)
      after factoring in the cost of fuel consumed during that shift, and the
      actual amount of time you are on the road. Rideshare apps do not track
      this accurately.
    </p>
    <p class="body_copy">
      There are pieces of data that have to be tracked and input at the end of a
      shift:
    </p>
    <ol class="px-6 list-decimal m-0 mb-5">
      <li class="font-light opacit-100">Miles driven</li>
      <li class="font-light opacit-100">Miles per gallon</li>
      <li class="font-light opacit-100">Gas price</li>
      <li class="font-light opacit-100">Gross Earned</li>
      <li class="font-light opacit-100">Hours driven</li>
      <li class="font-light opacit-100">Time of day</li>
    </ol>

    <p class="body_copy">
      Once this shift data is added and saved, your weekly and overall totals
      and averages are automatically updated.
    </p>
  </div>
</div>
<div class="bg-white">
  <div class="w-full max-w-6xl mx-auto px-5 md:px-0 py-12">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="w-full md:flex-1">
        <p class="cta">
          If you are a rideshare driver and would like to have a demo account to
          see if this is a tool that would be usedfule, send us your email
          address and we will set you up a test account.
        </p>
      </div>
      <div class="w-full md:w-2/5 flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Email"
          class="border border-gray-300 rounded-full px-5 py-3 text-lg font-light mr-0 md:mr-3 mb-5 md:mb-0 w-full md:w-auto"
        />
        <button
          class="bg-black border text-white border-black rounded-full px-8 py-4 w-full md:w-auto"
          >Submit</button
        >
      </div>
    </div>
  </div>
</div>

<Footer />

<style>
  h1,
  h3,
  input,
  li {
    font-family: "Montserrat", sans-serif;
    color: #fff;
  }
  h1 {
    @apply font-extrabold text-black text-5xl md:text-6xl mb-4 leading-none;
  }
  p {
    font-family: "Montserrat", sans-serif;
    @apply font-light text-black text-xl mb-5 opacity-75 leading-tight;
  }
  li {
    @apply text-lg font-medium text-white;
  }
  .register_link {
    font-family: "Montserrat", sans-serif;
    background: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
  }
  .login_link {
    font-family: "Montserrat", sans-serif;
  }
  .body_copy {
    font-family: "Montserrat", sans-serif;
    @apply text-lg font-light opacity-75 text-white mb-5;
  }
  .hero_copy {
    font-family: "Montserrat", sans-serif;
    @apply text-xl font-light opacity-100 text-black mb-5;
  }
  input {
    @apply text-black;
  }
  .cta {
    @apply font-normal text-xl mr-0 md:mr-20 mb-5 md:mb-0;
  }
  button {
    font-family: "Montserrat", sans-serif;
    background: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
    @apply font-bold;
  }
</style>
