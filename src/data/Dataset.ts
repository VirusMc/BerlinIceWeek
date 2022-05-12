import Store from "./Store";

export default class Dataset {
    constructor(
        public data: Store[],
        public readonly home: number[],
        public readonly finished: boolean = false
    ) {}
}
