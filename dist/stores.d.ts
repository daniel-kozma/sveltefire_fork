import { type DocumentData } from 'firebase/firestore';
import type { Firestore, Query, CollectionReference, DocumentReference } from 'firebase/firestore';
import { type User, type Auth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { AbstractStore, CustomDocumentData } from './types';
export declare function docStore<T extends DocumentData = DocumentData>(firestore: Firestore, ref: string | DocumentReference<T>, startWith?: T): AbstractStore<CustomDocumentData<T> | undefined> & {
    ref: DocumentReference<T>;
};
export declare function collectionStore<T extends DocumentData = DocumentData>(firestore: Firestore, ref: string | Query<T> | CollectionReference<T>, startWith?: T[]): AbstractStore<CustomDocumentData<T>[] | undefined> & {
    ref: Query<T>;
};
export declare function collectionGroupStore<T extends DocumentData = DocumentData>(firestore: Firestore, ref: string | Query<T>, startWith?: T[]): AbstractStore<CustomDocumentData<T>[] | undefined> & {
    ref: Query<T>;
};
export declare function userStore(auth: Auth): AbstractStore<User | undefined | null>;
export declare const fbServices: import("svelte/store").Writable<{
    app: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
}>;
