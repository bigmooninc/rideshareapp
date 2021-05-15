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
  <div class="w-full max-w-7xl mx-auto px-5 md:px-0">
    <div class="flex flex-col justify-center items-start pt-48 pb-32 w-full">
      <h1>How much is your driving worth?</h1>
      <p class="mr-0 md:mr-32 md:overflow-y-hiddenmr-32">
        Get accurate analytics to help inform when your time driving is the most
        profitable.
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

<style>
  h1 {
    font-family: "Montserrat", sans-serif;
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
</style>
