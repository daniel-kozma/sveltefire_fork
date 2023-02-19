<script>import { fbServices } from "../stores";
import { browserLocalPersistence, browserSessionPersistence, indexedDBLocalPersistence, inMemoryPersistence, setPersistence } from "firebase/auth";
import { get } from "svelte/store";
import { onMount } from "svelte";
export let ifChecked = "local";
export let ifNotChecked = "session";
const persistenceMap = {
  local: browserLocalPersistence,
  memory: inMemoryPersistence,
  indexedDB: indexedDBLocalPersistence,
  session: browserSessionPersistence
};
let checkbox;
onMount(() => updatePersistence(checkbox?.checked ?? false));
function handleClick(e) {
  if (e.target === null || !(e.target instanceof HTMLInputElement))
    throw "";
  updatePersistence(e.target.checked);
}
function updatePersistence(checked) {
  return setPersistence(get(fbServices).auth, persistenceMap[checked ? ifChecked : ifNotChecked]);
}
</script>

<input {...$$restProps} bind:this={checkbox} type="checkbox" on:click={handleClick}>