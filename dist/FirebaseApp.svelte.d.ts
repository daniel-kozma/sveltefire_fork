import { SvelteComponentTyped } from "svelte";
import { type FirebaseOptions } from "firebase/app";
declare const __propDef: {
    props: {
        credentials: FirebaseOptions;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type FirebaseAppProps = typeof __propDef.props;
export type FirebaseAppEvents = typeof __propDef.events;
export type FirebaseAppSlots = typeof __propDef.slots;
export default class FirebaseApp extends SvelteComponentTyped<FirebaseAppProps, FirebaseAppEvents, FirebaseAppSlots> {
}
export {};
