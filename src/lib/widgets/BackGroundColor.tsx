import Style from "./Style";

export class BackGroundColor extends Style {
    color = '';

    constructor(color?: string) {
        super();
        color && (this.color = color);
    }

    activate(): string {
        return `bg-${this.color}`
    }
}