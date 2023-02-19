<script>import { signOut } from "firebase/auth";
import { fbServices } from "../stores";
</script>

<button
  on:click={() => signOut($fbServices.auth)}
  {...$$restProps}
>
  <slot>Sign Out</slot>
</button>