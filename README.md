# Firesvelte
**A library that massively oversimplifies the usage of firebase with svelte(kit)**


> This is an extended library of SvelteFire (created by Fireship)


## Improvements:
### General:
- The project uses **vite** as the **build tool** (also good for manual testing)
- Automatically **initializes firebase** app, auth and firestore. You just have to provide your firebase credentials
- Organized components into separate folders like `auth` and `firestore`
- Typed `authStore`, `docStore`, `collectionStore` and `collectionGroupStore` more strictly


### Auth:
- Added **user loading state**
- Added `SignInButton` and `SignOutButton`. You can pass in the `persistence` and an `AuthProvider` into `SignInButton`
- Added a customizable `PersistenceCheckbox`
- Added customizable `EmailPwSignInForm` and `EmailPwSignInForm`, both of which have default templates.
- Added `EmailVerification`, which handles all the email verification.
- Added `EmailVerified`, which ensures, that the user's email is verified, or else they will be shown the `EmailVerification`
- Added `AuthReloadButton`


### Firestore:
- Added a `CustomDocumentData`, which directly has all the `data`, (no need to call `.data()`), `__ref` from the reference of the document, `__id` and `__exists`
- Added support for `collectionGroup` with `collectionGroupStore` and a `CollectionGroup` component
- Typed `Doc`, `Collection` and `CollectionGroup`: data will never be `null`, it will always be real data or the data you provide as `startWith`