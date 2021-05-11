<script>
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import { getAuth, signOut } from "firebase/auth";
  import { fly } from "svelte/transition";
  import { quintIn, quintOut } from "svelte/easing";

  // Props
  export let user;

  // Vars
  let showMobileNav = false;

  // Functions
  async function handleLogout() {
    const auth = await getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        $session.user = null;
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<nav
  class="fixed w-full p-5 flex flex-row justify-between items-center shadow-md"
>
  <p>
    <a svelte:prefetch href="/">Ride Share Stats</a>
  </p>
  <ul class="hidden md:flex flex-row items-center justify-end">
    {#if user}
      <!-- <li>
        <a sveltekit:prefetch href="/">Home</a>
      </li> -->
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
        <span class="px-3">//</span>
        <a sveltekit:prefetch href="login">Login</a>
      </li>
    {/if}
  </ul>
  <button class="focus:outline-none" on:click={() => (showMobileNav = true)}>
    <i class="fal fa-bars text-white md:hidden text-3xl" />
  </button>
</nav>

{#if showMobileNav}
  <div
    in:fly={{ duration: 500, y: -1000, easing: quintOut }}
    class="mobile_nav bg-black absolute top-0 bottom-0 left-0 w-full"
  >
    <p class="text-white">Mobile Nav</p>
  </div>
{/if}

<style>
  nav {
    background-color: #0b0c10;
    border-bottom: 1px solid #1f2833;
    z-index: 999;
  }
  p {
    color: #66fcf1;
    @apply font-bold text-xl flex-1;
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
  .mobile_nav {
    z-index: 99999;
  }
  span {
    color: #66fcf1;
  }
</style>
