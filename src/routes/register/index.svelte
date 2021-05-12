<script context="module">
  export async function load({ session }) {
    const { user } = session;
    if (user) {
      return {
        status: 302,
        redirect: "/dashboard",
      };
    }
    return {};
  }
</script>

<script>
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  // Components
  import Register from "$lib/components/Register.svelte";

  // Vars
  let email, password, confirmPassword;
  let validPassword = null;
  let confirmPasswordInput;

  let currentUser;
  let userId;

  // Functions
  function validatePassword() {
    if (password !== confirmPassword) {
      validPassword = false;
    } else {
      validPassword = true;
    }
  }

  async function handleRegister(event) {
    event.preventDefault();
    validatePassword();

    if (!validPassword) {
      confirmPassword = "";
    }

    password = event.detail.password;
    email = event.detail.email;

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          console.log("Res", res);
          $session.user = res.user.uid;
          console.log("Ses: ", $session.user);
        }
      );
      goto("dashboard");
    } catch (err) {
      let message = err.message || err;
      console.log(message);
    }
  }
</script>

<div
  class="page w-full h-screen flex justify-center items-start md:items-center p-3 md:p-0 pt-32 md:pt-0"
>
  <Register
    {email}
    {password}
    {confirmPassword}
    {confirmPasswordInput}
    on:register={handleRegister}
  />
</div>

<style>
  .page {
    background-color: #0b0c10;
  }
</style>
