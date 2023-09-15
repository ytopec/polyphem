import { styleToString } from "./tools/converters";
import Style from "./Style";

export default function Text(text: string, styles?: Array<Style>): JSX.Element {

    let outStyles = '' + styleToString(styles);

    return (
        <p className={outStyles}>{text}</p>
    )
}