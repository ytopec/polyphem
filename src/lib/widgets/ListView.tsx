export default function ListView(array: Array<JSX.Element>): JSX.Element {
    return <div className="flex">
        {
            array.map((item) => {
                return item;
            })
        }
    </div>
}