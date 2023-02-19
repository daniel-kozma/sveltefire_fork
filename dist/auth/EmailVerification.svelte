<script>import { formSubmitUtil } from "../util";
import { sendEmailVerification } from "firebase/auth";
import FIREBASE_AUTH_ERROR_MESSAGES from "./firebase_auth_error_messages.json";
import User from "./User.svelte";
let showForm = true;
let errorMessage = null;
let emailSent = false;
async function handleSubmit(e, user) {
  errorMessage = null;
  showForm = false;
  formSubmitUtil(e);
  await sendEmailVerification(user).catch((e2) => {
    errorMessage = FIREBASE_AUTH_ERROR_MESSAGES[e2.code];
    showForm = true;
    throw errorMessage;
  });
  showForm = true;
  emailSent = true;
}
</script>

<User let:user>
  {#if errorMessage !== null}
    <slot name="error" message={errorMessage}><p>Error: {errorMessage}</p></slot>
  {/if}

  {#if showForm === true}
    <form
      on:submit={(e) => handleSubmit(e, user)}
      {...$$restProps}
    >
      {#if emailSent}
        <slot name="sent">
          <p>Verification Email Sent. Click the Link in the Email. Also, please check your spam folder as well.</p>
          <button type="button" on:click={() => location.reload()}>I Clicked The Link</button>
          <button type="button" on:click={() => location.reload()}>Try Again</button>
        </slot>
      {:else}  
        <slot>
          <button type="submit">{emailSent ? "Resend" : "Send"} Verification Email</button>
        </slot>
      {/if}
    </form>
  {:else}
    <slot name="loading"><p>Sending Verification Email...</p></slot>
  {/if}
</User>