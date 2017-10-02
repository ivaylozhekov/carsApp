interface Array<T> {
    find(predicate: (search: T) => boolean) : T;
}

declare var handleError: any;

interface Window {
    handleError: any;
}
