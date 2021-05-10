<script>
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import { getAuth, signOut } from "firebase/auth";

  // Props
  export let user;

  // Functions
  async function handleLogout() {
    const auth = await getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<nav
  class="fixed w-full p-5 flex flex-row justify-between items-center shadow-md {user
    ? ''
    : 'hidden'}"
>
  <p>Ride Share Stats</p>
  <ul>
    {#if user}
      <li>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li>
        <a sveltekit:prefetch href="dashboard">Dashboard</a>
      </li>
      <!-- <li>
        <a sveltekit:prefetch href="shifts">Shifts</a>
      </li>
      <li>
        <a sveltekit:prefetch href="settings">Settings</a>
      </li> -->
      <li>
        <a href="." on:click|preventDefault={handleLogout}>Logout</a>
      </li>
    {:else}
      <li>
        <a sveltekit:prefetch href="register">Register</a>
      </li>
      <li>
        <a sveltekit:prefetch href="login">Login</a>
      </li>
    {/if}
  </ul>
</nav>

<style>
  nav {
    background-color: #0b0c10;
    border-bottom: 1px solid #1f2833;
    z-index: 999;
  }
  p {
    color: #66fcf1;
    @apply font-bold text-lg flex-1;
  }
  ul {
    @apply flex flex-row items-center justify-end;
  }
  li {
    @apply font-normal text-sm uppercase mx-5;
  }
  a {
    @apply transition-all duration-200 text-white;
  }
  a:hover {
    color: #66fcf1;
  }
</style>
