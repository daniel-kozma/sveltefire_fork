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
export type SignInButtonProps = typeof __propDef.props;
export type SignInButtonEvents = typeof __propDef.events;
export type SignInButtonSlots = typeof __propDef.slots;
export default class SignInButton extends SvelteComponentTyped<SignInButtonProps, SignInButtonEvents, SignInButtonSlots> {
}
export {};
