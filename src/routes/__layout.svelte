<script>
  import "../app.postcss";
  import { session } from "$app/stores";
  import { onMount } from "svelte";
  import * as Cookies from "js-cookie";
  import { initializeApp, getApps } from "firebase/app";
  import { getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  // const app = getApp("Ride Share App");

  // Vars
  let hasUser = false;

  let apps = getApps();
  if (apps.length === 0) {
    initializeApp({
      apiKey: "AIzaSyDgyYBEHnbkQZrDuRHQjo21bjn3KY8RiVA",
      authDomain: "ride-share-app-5938e.firebaseapp.com",
      projectId: "ride-share-app-5938e",
      storageBucket: "ride-share-app-5938e.appspot.com",
      messagingSenderId: "854596678112",
      appId: "1:854596678112:web:b2bb3244ff27ed74127b85",
    });
  }
  // Components
  import Nav from "$lib/components/Nav.svelte";

  // Functions
  onMount(async () => {
    const auth = await getAuth();
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        $session.user = user.uid;
        hasUser = true;
      } else {
        // const token = await user.getIdToken();
        $session.user = false;
        hasUser = false;
        return;
        // Cookies.set("token", token);
      }
    });
  });
</script>

<Nav user={hasUser} />

<slot />
