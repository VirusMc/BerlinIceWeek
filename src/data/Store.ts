export default class Store {
    constructor(
        public readonly market: string,
        public readonly location: string,
        public readonly ice_cream: string,
        public geocode?: number[]
    ) {}
}
