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
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  // Components
  import Login from "$lib/components/Login.svelte";

  // Vars
  let email,
    password = "";

  // Functions
  async function handleLogin(event) {
    event.preventDefault();

    email = event.detail.email;
    password = event.detail.password;

    try {
      const auth = await getAuth();
      await signInWithEmailAndPassword(auth, email, password).then((res) => {
        $session.user = res.user.uid;
        goto("dashboard");
      });
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
    }
  }
</script>

<div class="page w-full h-screen flex justify-center items-center">
  <Login {email} {password} on:login={handleLogin} />
</div>

<style>
  .page {
    background-color: #0b0c10;
  }
</style>
