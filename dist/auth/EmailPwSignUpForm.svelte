<script>import { fbServices } from "../stores";
import { formSubmitUtil } from "../util";
import { createUserWithEmailAndPassword, reload, updateProfile } from "firebase/auth";
import { get } from "svelte/store";
import FIREBASE_AUTH_ERROR_MESSAGES from "./firebase_auth_error_messages.json";
export let runAfter = void 0;
export let addUsername = false;
let showForm = true;
let errorMessage = null;
async function handleSubmit(e) {
  errorMessage = null;
  showForm = false;
  const formData = formSubmitUtil(e);
  const userCredential = await createUserWithEmailAndPassword(get(fbServices).auth, formData.email, formData.password).catch((e2) => {
    errorMessage = FIREBASE_AUTH_ERROR_MESSAGES[e2.code];
    showForm = true;
    throw errorMessage;
  });
  if (addUsername)
    await updateProfile(userCredential.user, { displayName: formData.username });
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
      {#if addUsername}
        <div><input type="text" name="username" placeholder="Username"></div>
      {/if}
      <div><input type="email" name="email" placeholder="Email Address"></div>
      <div><input type="password" name="password" placeholder="Password"></div>
      <div><button type="submit">Sign Up</button></div>
    </slot>
  </form>
{:else}
  <slot name="loading"><p>Creating User...</p></slot>
{/if}