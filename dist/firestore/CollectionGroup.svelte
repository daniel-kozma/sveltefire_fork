<script>import { collectionGroupStore, fbServices } from "../stores";
export let ref;
export let startWith;
let firestore = $fbServices.firestore;
let store = collectionGroupStore(firestore, ref, startWith);
</script>

{#if $store !== undefined}
  <slot data={$store ?? startWith} ref={store.ref} count={$store?.length ?? 0} />
{:else}
  <slot name="loading"><p>Loading Data...</p></slot>
{/if}