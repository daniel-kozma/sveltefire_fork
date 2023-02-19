<script>import { fbServices, userStore } from "../stores";
import EmailVerifyForm from "./EmailVerification.svelte";
import User from "./User.svelte";
</script>

<User let:user>
  {#if !user.emailVerified}
    <slot name="notVerified">
      <h1>Please Verify Your Email Before Continuing.</h1>
      <EmailVerifyForm/>
    </slot>
  {:else}
    <slot></slot>
  {/if}
</User>