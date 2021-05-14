<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  // Props
  export let email, password;
</script>

<div class="w-full max-w-sm mx-auto mb-20">
  <div class="form_container px-10 py-10 rounded-xl">
    <h3>Log In</h3>
    <form
      on:submit|preventDefault={() => dispatch("login", { email, password })}
    >
      <div class="mb-4">
        <input type="email" bind:value={email} placeholder="Add your email" />
      </div>
      <div class="mb-4">
        <input
          type="password"
          bind:value={password}
          placeholder="Add a password"
        />
      </div>
      <button type="submit" class="focus:outline-none">Login</button>
    </form>
    <p>
      Don't have an account? <a
        sveltekit:prefetch
        href="register"
        class="form_link">Register</a
      >
    </p>
  </div>
</div>

<style>
  h3 {
    font-family: "Montserrat", sans-serif;
    @apply text-center font-light uppercase mb-6 text-3xl text-white;
  }
  input {
    font-family: "Montserrat", sans-serif;
    color: white;
    border-color: #c5c6c7;
    @apply border rounded-full px-5 py-3 font-light w-full text-base bg-transparent;
  }
  input:focus {
    outline: none;
  }
  button {
    font-family: "Montserrat", sans-serif;
    border: 1px solid #66fcf1;
    background-color: #66fcf1;
    color: #1f2833;
    @apply font-bold rounded-full px-8 py-3 w-full;
  }
  p {
    font-family: "Montserrat", sans-serif;
    @apply font-light text-sm text-white text-center mt-4;
  }
  .form_container {
    background-color: #1f2833;
  }
  .form_link {
    color: #45a29e;
  }
  .form_link:hover {
    text-decoration: underline;
  }
</style>
