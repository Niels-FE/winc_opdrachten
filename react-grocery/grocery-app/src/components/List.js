import { React, Component } from 'react';
import ListItem from "./ListItem";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Peren" },
                { id: 2, title: "Milk" },
            ]
        };
    }
    clickEvent(item) {
        alert(`clicked!${item}`);
    }

    render() {
        return (
            <ul>
                {this.state.groceryItems.map((item) => (
                    <ListItem
                        id={item.id}
                        title={item.title}
                        clickEvent={() => this.clickEvent(item.title)}
                    />
                ))}
            </ul>
        )
    }
}

export default List;