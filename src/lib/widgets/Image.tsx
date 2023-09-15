import Style from "./Style";
import { styleToString } from "./tools/converters";

export default function Image(src: string, alt?: string, styles?: Array<Style>): JSX.Element {

    let outStyles = '' + styleToString(styles)

    return <img src={src} alt={alt} className={outStyles} />
}