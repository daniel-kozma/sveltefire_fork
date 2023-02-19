import { writable, derived } from 'svelte/store';
import { doc, collection, onSnapshot, collectionGroup } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
export function docStore(firestore, ref, startWith) {
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        // @ts-ignore
        return { subscribe, ref: null };
    }
    const docRef = typeof ref === 'string' ? doc(firestore, ref) : ref;
    const { subscribe } = writable(undefined, (set) => onSnapshot(docRef, (s) => set({ __id: s.id, __ref: s.ref, __exists: s.exists(), ...s.data() })));
    return { subscribe, ref: docRef };
}
export function collectionStore(firestore, ref, startWith = []) {
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        // @ts-ignore
        return { subscribe, ref: null, };
    }
    const colRef = typeof ref === 'string' ? collection(firestore, ref) : ref;
    const { subscribe } = writable(undefined, (set) => onSnapshot(colRef, (snapshot) => set(snapshot.docs.map(s => ({ __id: s.id, __ref: s.ref, __exists: s.exists(), ...s.data() })))));
    return { subscribe, ref: colRef, };
}
export function collectionGroupStore(firestore, ref, startWith = []) {
    let unsubscribe;
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        // @ts-ignore
        return { subscribe, ref: null, };
    }
    const colRef = typeof ref === 'string' ? collectionGroup(firestore, ref) : ref;
    const { subscribe } = writable(undefined, (set) => onSnapshot(colRef, (snapshot) => set(snapshot.docs.map((s) => ({ __id: s.id, __ref: s.ref, __exists: s.exists(), ...s.data() })))));
    return {
        subscribe,
        ref: colRef,
    };
}
export function userStore(auth) {
    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable(undefined);
        return { subscribe, };
    }
    const { subscribe } = writable(undefined, (set) => onAuthStateChanged(auth, set));
    return { subscribe, };
}
export const fbServices = writable();
