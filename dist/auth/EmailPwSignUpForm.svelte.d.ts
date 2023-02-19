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
export type EmailPwSignUpFormProps = typeof __propDef.props;
export type EmailPwSignUpFormEvents = typeof __propDef.events;
export type EmailPwSignUpFormSlots = typeof __propDef.slots;
export default class EmailPwSignUpForm extends SvelteComponentTyped<EmailPwSignUpFormProps, EmailPwSignUpFormEvents, EmailPwSignUpFormSlots> {
}
export {};
