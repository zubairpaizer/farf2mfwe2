'use client';
import { useState } from "react";
import dropdownIcon from "../../public/images/icons/icon-dd.svg";

export const Dropdown = (props) => {
    const [ visible, setVisible ] = useState(false);
    const [ selected, setSelected ] = useState(props.selected);
    const options = props.options || [];

    return (
        <div className={(visible ? 'opened ' : '') + "select-dropdown"}>
            <div onClick={() => setVisible(!visible)} className="clickable">
                <span>{ selected.name }</span>
                <img className="icon" src={dropdownIcon.src} alt="" />
            </div>
            <div className="dropable">
                { options.map((val, index) => {
                    return (
                        <div onClick={() => { props.onSelect(val); setSelected(val); setVisible(!visible) }} key={index} className={(val.value == selected.value ? 'selected ' : '') + "item"}>
                            <span>{ val.name }</span>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}