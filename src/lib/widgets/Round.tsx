// export function Rounded() {
//     return 'rounded';
// }

import Style from "./Style";

// export function RoundedMD() {
//     return 'rounded-md';
// }

export class Rounded extends Style {
    constructor() { super();}

    activate(): string {
        return 'rounded';
    }
}
