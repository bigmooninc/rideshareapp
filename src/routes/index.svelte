<script context="module">
  export async function load({ session }) {
    let { user } = session;
    if (!user) {
      return {
        status: 302,
        redirect: "login",
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

<div class="w-full max-w-3xl mx-auto py-20">
  <a class="text-white" href="." on:click|preventDefault={handleLogout}
    >Logout</a
  >
</div>
