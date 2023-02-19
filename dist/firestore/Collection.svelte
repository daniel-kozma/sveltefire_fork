<script>import { collectionStore, fbServices } from "../stores";
export let checkForEmpty = false;
export let ref;
export let startWith = [];
let firestore = $fbServices.firestore;
let store = collectionStore(firestore, ref, startWith);
</script>

{#if $store === undefined}
  <slot name="loading"><p>Loading Data...</p></slot>
{:else}
  {#if checkForEmpty && ($store.length ?? 0) === 0}
    <slot name="empty" ref={store.ref}/>
  {:else}
    <slot data={$store ?? startWith} ref={store.ref} count={$store?.length ?? 0} />
  {/if}
{/if}
