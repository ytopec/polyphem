import Style from "./Style"
import { styleToString } from "./tools/converters"

export default function Row(children: Array<JSX.Element>, styles?: Array<Style>): JSX.Element {

    let out_styles = 'flex ' + styleToString(styles);

    return <div className={out_styles}>
        {children.map((item) => {
            return item
        })}
    </div>
}