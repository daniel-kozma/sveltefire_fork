import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PersistenceCheckboxProps = typeof __propDef.props;
export type PersistenceCheckboxEvents = typeof __propDef.events;
export type PersistenceCheckboxSlots = typeof __propDef.slots;
export default class PersistenceCheckbox extends SvelteComponentTyped<PersistenceCheckboxProps, PersistenceCheckboxEvents, PersistenceCheckboxSlots> {
}
export {};
