export function formSubmitUtil(e, reset = false) {
    e.preventDefault();
    if (e.target === null || !(e.target instanceof HTMLFormElement))
        throw new TypeError("Event target is null or not a html form element");
    const formData = new FormData(e.target);
    if (reset)
        e.target.reset();
    const dataObject = Object.fromEntries(formData.entries());
    // If a function is bound to `this`
    if (typeof this === "function")
        this(dataObject);
    return dataObject;
}
