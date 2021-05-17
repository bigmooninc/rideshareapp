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
</script>

<div class="border-b border-gray-800">
  <div class="w-full max-w-5xl mx-auto px-5 md:px-0">
    <div
      class="flex flex-col justify-center items-start pt-48 pb-32 w-full md:w-2/3"
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
          class="login_link text-white bg-none px-8">Sign In</a
        >
      </div>
    </div>
  </div>
</div>
<div class="bg-white">
  <div class="w-full max-w-4xl mx-auto px-5 md:px-0 py-16">
    <h3 class="font-bold text-4xl mb-2 leading-none">
      Why build this application?
    </h3>
    <p class="body_copy">
      When freelance work slowed down I decided to start driving for Uber/Lyft
      because I could do it whenever I wanted, and could stop and start when I
      pleased. Since I was going to be putting a good bit of miles on my car,
      and spending extra money in gas, I wanted to be able to determine if the
      amount that I made per hour made it worthwhile. In order to do that I had
      to keep track of how long I was actually spending on the road, and also
      keep track of what I was spending on gas.
    </p>
    <h3 class="font-bold text-4xl mb-2 leading-none mt-10">
      What information is being tracked?
    </h3>
    <p class="body_copy">
      There are sevent data points that are being captured when adding a new
      shift:
    </p>
    <ul class="p-0 pl-10 list-disc m-0">
      <li class="font-light opacit-100 text-base">
        Miles driven: captured using in the car with trip miles
      </li>
      <li class="font-light opacit-100 text-base">
        Miles per gallon: captured in the car with mpg tracking
      </li>
      <li class="font-light opacit-100 text-base">
        Gas price: the last price paid for gas in the tank
      </li>
      <li class="font-light opacit-100 text-base">
        Gross Earned: obtained from mobile app
      </li>
      <li class="font-light opacit-100 text-base">
        Number of hours driving: calculated from the time I begin driving until
        I officially stop
      </li>
      <li class="font-light opacit-100 text-base">
        Time of Day (AM, Midday, PM)
      </li>
    </ul>
  </div>
</div>

<style>
  h1,
  h3,
  li {
    font-family: "Montserrat", sans-serif;
  }
  h1 {
    @apply font-bold text-white text-6xl mb-3;
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
    @apply text-lg font-light opacity-100 text-black;
  }
</style>
