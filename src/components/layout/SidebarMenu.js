import React from "react";
import { sidebarMenuItems as items } from "../../api";
import { List } from "../menu";

export class SidebarMenu extends React.Component {
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
      <div className="sidebar-menu">
        <ul className="sidebar-menu__container">
          <List
            items={ items }
            handleClick={ this.handleClick }
          />
        </ul>
      </div>
    );
  }
}
