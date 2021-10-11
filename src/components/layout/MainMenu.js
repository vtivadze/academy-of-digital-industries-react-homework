import React from "react";
import { List } from "../menu";

export class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    }
  }

  render() {
    const items = this.state.items;

    return (
      <nav className="main-menu">
        <ul className="main-menu__container">
          <List
            items={items}
            handleClick={this.props.handleClick}
          />
        </ul>
      </nav>
    );
  }
}
