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
    <div class="flex flex-col justify-center items-start pt-48 pb-32">
      <h1>Rideshare Analytics</h1>
      <p>
        Get accurate analytics to help inform when your time driving is the most
        profitable.
      </p>
      <a
        href="register"
        class="border rounded-full font-medium text-base px-10 py-3"
        >Get Started</a
      >
    </div>
  </div>

  <!-- <a class="text-white" href="." on:click|preventDefault={handleLogout}
    >Logout</a
  > -->
</div>

<style>
  h1 {
    @apply font-bold text-white text-5xl mb-3;
  }
  p {
    @apply font-light text-white text-xl mb-5 opacity-50 leading-tight;
  }
  a {
    background: #66fcf1;
    border-color: #66fcf1;
    color: #1f2833;
  }
</style>
