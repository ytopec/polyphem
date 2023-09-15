export default function Column(children: Array<JSX.Element>) {
    return <div className="">
        {
            children.map((item) => {
                return item;
            })
        }
    </div>
}