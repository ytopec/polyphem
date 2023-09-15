import Style from "../Style";

export default class Tailwind extends Style {
    
    className = '';
    
    constructor(className: string) {
        super();

        this.className = className;
    }

    activate(): string {
        return this.className;
    }
}