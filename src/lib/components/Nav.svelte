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
        showMobileNav = false;
        goto("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
</script>

<nav
  class="fixed w-full px-3 py-5 flex flex-row justify-between items-center shadow-md"
>
  <p>
    <a svelte:prefetch href=".">Rideshare Analytics</a>
  </p>
  <ul class="hidden md:flex flex-row items-center justify-end">
    {#if user}
      <!-- <li>
        <a sveltekit:prefetch href="/">Home</a>
      </li> -->
      <li>
        <a sveltekit:prefetch href="dashboard">Dashboard</a>
      </li>
      <li>
        <a sveltekit:prefetch href="shifts">Shifts</a>
      </li>
      <!-- <li>
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
    in:fly={{ duration: 400, y: -1000, easing: quintOut }}
    out:fly={{ duration: 300, y: -1000, easing: quintIn }}
    class="mobile_nav fixed top-0 bottom-0 left-0 w-full"
  >
    <ul class="pr-5 pb-10 flex flex-col justify-end items-end h-full">
      {#if user}
        <li class="mobile_li">
          <a
            href="dashboard"
            sveltekit:prefetch
            on:click={() => (showMobileNav = false)}>Dashboard</a
          >
        </li>
        <li class="mobile_li">
          <a
            href="shifts"
            sveltekit:prefetch
            on:click={() => (showMobileNav = false)}>Shifts</a
          >
        </li>
        <li class="mobile_li">
          <a href="." on:click|preventDefault={handleLogout}>Logout</a>
        </li>
      {:else}
        <li class="mobile_li">
          <a
            href="/"
            sveltekit:prefetch
            on:click={() => (showMobileNav = false)}>Home</a
          >
        </li>
        <li class="mobile_li">
          <a
            href="register"
            sveltekit:prefetch
            on:click={() => (showMobileNav = false)}>Register</a
          >
        </li>
        <li class="mobile_li">
          <a
            href="login"
            sveltekit:prefetch
            on:click={() => (showMobileNav = false)}>Sign In</a
          >
        </li>
      {/if}
      <li class="mobile_li mt-5">
        <a
          href="."
          on:click={() => (showMobileNav = false)}
          class="opacity-50 focus:outline-none">[ Close ]</a
        >
      </li>
    </ul>
    <a
      href="."
      class="focus:outline-none"
      on:click|preventDefault={() => (showMobileNav = false)}
    >
      <i
        class="fal fa-times text-white text-4xl absolute right-0 top-0 mr-3 mt-5"
      />
    </a>
  </div>
{/if}

<style>
  nav {
    background-color: #0b0c10;
    border-bottom: 1px solid #1f2833;
    z-index: 999;
  }
  p {
    font-family: "Montserrat", sans-serif;
    color: #66fcf1;
    @apply font-bold text-xl flex-1;
  }
  li {
    font-family: "Montserrat", sans-serif;
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
  .mobile_nav {
    background-color: rgba(0, 0, 0, 0.95);
  }
  .mobile_li {
    @apply font-light text-2xl leading-loose;
  }
</style>
