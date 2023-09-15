import { JSXElement } from "@babel/types";

// export default class Row {

//     children: Array<Widget> = []

//     constructor(children: Array<Widget>) {
//         this.children = children;
//     }

//     render() {

//         return (
//             <div className="flex">
//                 {this.children.map((item) => {
//                     return item.render()
//                 })}
//             </div>
//         )
//     } 
// }

export default function Row(children: Array<JSX.Element>): JSX.Element {
    return <div className="flex">
        {children.map((item) => {
            return item
        })}
    </div>
}