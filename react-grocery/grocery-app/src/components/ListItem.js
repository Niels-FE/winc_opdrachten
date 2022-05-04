import React from "react";

function ListItem(props) {
    return (
        <li
            key={props.id}
            value={props.title}
            className="list-item"
            onClick={props.clickEvent}
        >
            {props.title}</li>
    )
}

export default ListItem;