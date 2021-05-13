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
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import { getAuth, signOut } from "@firebase/auth";

  // Functions
  function handleLogout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      $session.user = null;
      goto("login");
    });
  }
</script>

<div class="border-b border-gray-800">
  <div class="w-full max-w-5xl mx-auto px-5 md:px-0">
    <div class="flex flex-col justify-center items-start pt-48 pb-32 w-2/3">
      <h1>How much is your drive time worth?</h1>
      <p class="mr-32">
        Get accurate analytics to help inform when your time driving is the most
        profitable.
      </p>
      <div class="flex flex-row items-center">
        <a
          href="register"
          class="register_link border rounded-full font-bold text-base px-10 py-3"
          >Get Started</a
        >
        <a href="login" class="login_link text-white bg-none px-8">Sign In</a>
      </div>
    </div>
  </div>

  <!-- <a class="text-white" href="." on:click|preventDefault={handleLogout}
    >Logout</a
  > -->
</div>

<style>
  h1 {
    font-family: "Montserrat", sans-serif;
    @apply font-bold text-white text-5xl mb-3;
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
