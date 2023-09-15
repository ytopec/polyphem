import { styleToString } from "./tools/converters";
import Style from "./Style";

// export default class Text extends Widget {
    
//     text: string = '';
//     styles: StyleText | undefined;

//     constructor(text: string, styles?: StyleText) {
//         super();
        
//         this.text = text;
//         this.styles = styles;
//     }

//     render(): JSX.Element  {
//         return (
//             <p>{this.text}</p>
//         );
//     }
// }

export default function Text(text: string, styles?: Array<Style>): JSX.Element {

    let outStyles = '' + styleToString(styles);

    return (
        <p className={outStyles}>{text}</p>
    )
}