<script>import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { fbServices } from "./stores";
export let credentials;
const app = initializeApp(credentials);
const auth = getAuth(app);
const firestore = getFirestore(app);
fbServices.set({ app, auth, firestore });
</script>


<slot />