<script>import { setDoc } from "firebase/firestore";
import { docStore, fbServices } from "../stores";
export let createIfDoesntExist = false;
export let ref;
export let startWith;
let firestore = $fbServices.firestore;
let store = docStore(firestore, ref, startWith);
$:
  if ($store === null && createIfDoesntExist)
    setDoc(store.ref, startWith);
</script>
{#if $store !== undefined}
  <slot data={$store ?? startWith} ref={store.ref} />
{:else}
  <slot name="loading"><p>Loading Data...</p></slot>
{/if}