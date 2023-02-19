<script>import { fbServices } from "../stores";
import { formSubmitUtil } from "../util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { get } from "svelte/store";
import FIREBASE_AUTH_ERROR_MESSAGES from "./firebase_auth_error_messages.json";
export let runAfter = void 0;
let showForm = true;
let errorMessage = null;
async function handleSubmit(e) {
  errorMessage = null;
  showForm = false;
  const formData = formSubmitUtil(e);
  const userCredential = await signInWithEmailAndPassword(get(fbServices).auth, formData.email, formData.password).catch((e2) => {
    errorMessage = FIREBASE_AUTH_ERROR_MESSAGES[e2.code];
    showForm = true;
    throw errorMessage;
  });
  if (typeof runAfter === "function")
    runAfter(userCredential, formData);
}
</script>


{#if errorMessage !== null}
  <slot name="error" message={errorMessage}><p>Error: {errorMessage}</p></slot>
{/if}

{#if showForm === true}
  <form
    on:submit={handleSubmit}
    {...$$restProps}
  >
    <slot>
      <div><input type="email" name="email" placeholder="Email Address"></div>
      <div><input type="password" name="password" placeholder="Password"></div>
      <div><button type="submit">Sign In</button></div>
    </slot>
  </form>
{:else}
  <slot name="loading"><p>Signing In...</p></slot>
{/if}