import { SvelteComponentTyped } from "svelte";
import type { CollectionReference, Query, DocumentData } from 'firebase/firestore';
import type { CustomDocumentData } from '../types';
declare class __sveltets_Render<T extends DocumentData> {
    props(): {
        checkForEmpty?: boolean | undefined;
        ref: string | CollectionReference<T> | Query<T>;
        startWith?: T[] | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            data: CustomDocumentData<T>[];
            ref: CollectionReference<T> | Query<T> | null;
            count: number;
        };
        loading: {};
        empty: {
            ref: CollectionReference<T> | Query<T> | null;
        };
    };
}
export type CollectionProps<T extends DocumentData> = ReturnType<__sveltets_Render<T>['props']>;
export type CollectionEvents<T extends DocumentData> = ReturnType<__sveltets_Render<T>['events']>;
export type CollectionSlots<T extends DocumentData> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Collection<T extends DocumentData> extends SvelteComponentTyped<CollectionProps<T>, CollectionEvents<T>, CollectionSlots<T>> {
}
export {};
