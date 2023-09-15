
export default function Scaffold(children: Array<JSX.Element>): JSX.Element {
    let out = '';
    children.map((item) => {
        out += item;
    })

    return <body>
        {children.map((item) => {
            return item
        })}
    </body>;
}