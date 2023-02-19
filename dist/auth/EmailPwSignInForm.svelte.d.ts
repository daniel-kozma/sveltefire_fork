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
    };
};
export type EmailPwSignInFormProps = typeof __propDef.props;
export type EmailPwSignInFormEvents = typeof __propDef.events;
export type EmailPwSignInFormSlots = typeof __propDef.slots;
export default class EmailPwSignInForm extends SvelteComponentTyped<EmailPwSignInFormProps, EmailPwSignInFormEvents, EmailPwSignInFormSlots> {
}
export {};
