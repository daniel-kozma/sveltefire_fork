import { SvelteComponentTyped } from "svelte";
import { type DocumentReference, type DocumentData } from "firebase/firestore";
import type { CustomDocumentData } from "../types";
declare class __sveltets_Render<T extends DocumentData> {
    props(): {
        createIfDoesntExist?: boolean | undefined;
        ref: string | DocumentReference<T>;
        startWith: T;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            data: CustomDocumentData<T>;
            ref: DocumentReference<T>;
        };
        loading: {};
    };
}
export type DocProps<T extends DocumentData> = ReturnType<__sveltets_Render<T>['props']>;
export type DocEvents<T extends DocumentData> = ReturnType<__sveltets_Render<T>['events']>;
export type DocSlots<T extends DocumentData> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Doc<T extends DocumentData> extends SvelteComponentTyped<DocProps<T>, DocEvents<T>, DocSlots<T>> {
}
export {};
