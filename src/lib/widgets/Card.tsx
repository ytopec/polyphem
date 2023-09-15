import Style from "./Style";
import { styleToString } from "./tools/converters";

export default function Card(children: Array<JSX.Element>, styles?: Array<Style>): JSX.Element {

    let outStyles = "p-4 shadow-lg " + styleToString(styles);

    return <div className={outStyles}>
        {
            children.map((item) => {
                return item;
            })
        }
    </div>
}