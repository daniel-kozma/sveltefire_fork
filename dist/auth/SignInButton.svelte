<script>import { browserLocalPersistence, browserSessionPersistence, EmailAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, indexedDBLocalPersistence, inMemoryPersistence, PhoneAuthProvider, setPersistence, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import { onMount } from "svelte";
import { get } from "svelte/store";
import { fbServices } from "../stores";
export let provider = new GoogleAuthProvider();
export let persistence = void 0;
const persistenceMap = {
  local: browserLocalPersistence,
  memory: inMemoryPersistence,
  indexedDB: indexedDBLocalPersistence,
  session: browserSessionPersistence
};
onMount(() => {
  if (persistence === void 0)
    return;
  if (typeof persistence === "string")
    return setPersistence(get(fbServices).auth, persistenceMap[persistence]);
  return setPersistence(get(fbServices).auth, persistence);
});
</script>

<button
  on:click={() => signInWithPopup($fbServices.auth, provider)}
  {...$$restProps}
>
  <slot>Sign In</slot>
</button>