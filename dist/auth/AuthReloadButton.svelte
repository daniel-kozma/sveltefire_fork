<script>import { fbServices } from "../stores";
import { reload, updateCurrentUser } from "firebase/auth";
import User from "./User.svelte";
</script>

<User let:user>
  <button
    on:click={async () => {
      await reload(user)
      await updateCurrentUser($fbServices.auth, $fbServices.auth.currentUser)
    }}
    {...$$restProps}
    >
    <slot>Refresh</slot>
  </button>
</User>