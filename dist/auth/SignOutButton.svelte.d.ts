import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SignOutButtonProps = typeof __propDef.props;
export type SignOutButtonEvents = typeof __propDef.events;
export type SignOutButtonSlots = typeof __propDef.slots;
export default class SignOutButton extends SvelteComponentTyped<SignOutButtonProps, SignOutButtonEvents, SignOutButtonSlots> {
}
export {};
