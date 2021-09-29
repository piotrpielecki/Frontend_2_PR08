export class ReturnData {
    count: Number;
    next: String|null;
    previous: String|null;
    results: Array<Object>;

    constructor() {
        this.count = 0;
        this.next = "";
        this.previous = "";
        this.results = [];
    }
}