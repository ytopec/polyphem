import Style from "../Style";

export function styleToString(styles?: Array<Style>): string {
    let out = '';

    styles && styles.map((item) => {
        out += item.activate();
        out += ' ';
    })

    return out;
}