import { SvelteComponentTyped } from "svelte";
import type { CustomDocumentData } from '../types';
import type { Query, DocumentData } from 'firebase/firestore';
declare class __sveltets_Render<T extends DocumentData> {
    props(): {
        ref: string | Query<T>;
        startWith: T[];
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            data: CustomDocumentData<T>[];
            ref: Query<T> | null;
            count: number;
        };
        loading: {};
    };
}
export type CollectionGroupProps<T extends DocumentData> = ReturnType<__sveltets_Render<T>['props']>;
export type CollectionGroupEvents<T extends DocumentData> = ReturnType<__sveltets_Render<T>['events']>;
export type CollectionGroupSlots<T extends DocumentData> = ReturnType<__sveltets_Render<T>['slots']>;
export default class CollectionGroup<T extends DocumentData> extends SvelteComponentTyped<CollectionGroupProps<T>, CollectionGroupEvents<T>, CollectionGroupSlots<T>> {
}
export {};
