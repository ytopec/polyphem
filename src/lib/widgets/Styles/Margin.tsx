import Style from "../Style";

export default class Margin extends Style {

    ml = 0;
    mt = 0;
    mr = 0;
    mb = 0;

    constructor(ml: number, mt: number, mr: number, mb: number) {
        super();

        this.ml = ml;
        this.mt = mt;
        this.mr = mr;
        this.mb = mb;
    }

    activate(): string {
        return `ml-${this.ml} mt-${this.mt} mr-${this.mr} mb-${this.mb}`
    }
}