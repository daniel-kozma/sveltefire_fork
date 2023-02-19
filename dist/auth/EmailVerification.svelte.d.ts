import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        loading: {};
        error: {
            message: string;
        };
        sent: {};
    };
};
export type EmailVerificationProps = typeof __propDef.props;
export type EmailVerificationEvents = typeof __propDef.events;
export type EmailVerificationSlots = typeof __propDef.slots;
export default class EmailVerification extends SvelteComponentTyped<EmailVerificationProps, EmailVerificationEvents, EmailVerificationSlots> {
}
export {};
