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

<div class="border-b border-gray-800">
  <div class="w-full max-w-5xl mx-auto px-5 md:px-0">
    <div
      class="flex flex-col justify-center items-start pt-36 md:pt-48 pb-32 w-full md:w-2/3"
    >
      <h1>How much is your driving making you?</h1>
      <p class="mr-0 md:mr-16 md:overflow-y-hiddenmr-32">
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
          class="login_link text-white bg-none px-8 hover:underline">Sign In</a
        >
      </div>
    </div>
  </div>
</div>
<div class="bg-white">
  <div class="w-full max-w-5xl mx-auto px-5 md:px-0 py-16">
    <h3 class="font-bold text-4xl mb-2 leading-none">
      Why did I build this app?
    </h3>
    <p class="body_copy">
      When freelance work slowed down I decided to start driving for Uber/Lyft
      because I could do it whenever I wanted, and could stop and start when I
      pleased. Since I was going to be putting a good bit of miles on my car,
      and spending extra money in gas, I wanted to be able to determine if the
      amount that I made per hour made it worthwhile. So I built this app.
    </p>
    <h3 class="font-bold text-4xl mb-2 leading-none mt-10">
      What data am I tracking?
    </h3>

    <p class="body_copy">
      There are six data points that are being captured when adding a new shift:
    </p>
    <ul class="px-5 list-disc m-0 mb-5">
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Miles driven:</span> captured using in the car with
        trip miles
      </li>
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Miles per gallon:</span> captured in the car with
        mpg tracking
      </li>
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Gas price:</span> the last price paid for gas in
        the tank
      </li>
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Gross Earned:</span> obtained from mobile app
      </li>
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Hours driven:</span> number of hours calculated from
        the time I begin driving until I officially stop
      </li>
      <li class="font-light opacit-100 text-base">
        <span class="font-bold">Time of day:</span> AM, Midday, PM
      </li>
    </ul>

    <p class="body_copy">
      These data points are used to obtain other data, such as the actual gas
      cost for the shift, the net earned per hour, and the net earned per mile.
      These metrics help to determine if driving is worth the time.
    </p>

    <p class="body_copy">
      Below is a sample of what the dashboard looks like. It hightlights the
      current week of data and lists the individual shifts below.
    </p>

    <!-- <a
      sveltekit:prefetch
      href="register"
      class="register_link border rounded-full font-bold text-base px-8 py-3"
      >Get Started</a
    > -->

    <img src="/dashboardview.png" alt="" class="w-full mt-10" />
  </div>
</div>

<Footer />

<style>
  h1,
  h3,
  li {
    font-family: "Montserrat", sans-serif;
  }
  h1 {
    @apply font-bold text-white text-5xl md:text-6xl mb-3;
  }
  p {
    font-family: "Montserrat", sans-serif;
    @apply font-light text-white text-xl mb-5 opacity-50 leading-tight;
  }
  .register_link {
    font-family: "Montserrat", sans-serif;
    background: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
  }
  .login_link {
    font-family: "Montserrat", sans-serif;
    @apply text-white;
  }
  .body_copy {
    font-family: "Montserrat", sans-serif;
    @apply text-lg font-light opacity-100 text-black mb-5;
  }
</style>
