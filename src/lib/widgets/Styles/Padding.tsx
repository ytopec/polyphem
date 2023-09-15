import Style from "../Style";

export default class Padding extends Style {

    ml = 0;
    mt = 0;
    mr = 0;
    mb = 0;
    
    p = 0

    constructor(p: number) {
        super();

        this.p = p;
    }

    activate(): string {
        return `p-${this.p}`
    }
}