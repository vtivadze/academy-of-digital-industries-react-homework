import React from "react";
import { mainMenuItems as items } from "../../api";
import { List } from "../menu";

export class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const items = this.state.items;
    this.setState({items: items.map((item, index) => {
      item.isActive = i === index;
      return item;
    })});
  }
  
  render() {
    const items = this.state.items;

    return (
      <nav className="main-menu">
        <ul className="main-menu__container">
          <List
            items={items}
            handleClick={this.handleClick}
          />
        </ul>
      </nav>
    );
  }
}
