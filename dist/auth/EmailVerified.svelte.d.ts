import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        notVerified: {};
    };
};
export type EmailVerifiedProps = typeof __propDef.props;
export type EmailVerifiedEvents = typeof __propDef.events;
export type EmailVerifiedSlots = typeof __propDef.slots;
export default class EmailVerified extends SvelteComponentTyped<EmailVerifiedProps, EmailVerifiedEvents, EmailVerifiedSlots> {
}
export {};
