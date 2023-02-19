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
export type AuthReloadButtonProps = typeof __propDef.props;
export type AuthReloadButtonEvents = typeof __propDef.events;
export type AuthReloadButtonSlots = typeof __propDef.slots;
export default class AuthReloadButton extends SvelteComponentTyped<AuthReloadButtonProps, AuthReloadButtonEvents, AuthReloadButtonSlots> {
}
export {};
