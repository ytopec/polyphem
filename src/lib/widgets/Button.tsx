import { MouseEventHandler } from "react";
import Style from "./Style";
import StyleButton from "./StyleButton";

export default function Button(text: string, onClicks?: MouseEventHandler<HTMLButtonElement>, styles?: Array<Style>): JSX.Element {

    let outStyles = '';

    styles?.map((item) => {
        outStyles += item.activate();
        outStyles += ' ';
    })

    return (
            <button className={outStyles} onClick={onClicks}>{text}</button>
    )
}