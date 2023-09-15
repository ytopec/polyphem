import Style from "../Style";

export default class Width extends Style {

    width = '';

    constructor(width: string) {
        super();

        this.width = width;
    }

    activate(): string {
        return this.width
    }
}