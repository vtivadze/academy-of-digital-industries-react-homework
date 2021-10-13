import React from "react";

import { Header, Main, Footer, Sidebar } from "./components/layout";
import { mainMenuItems, sidebarMenuItems } from "./api";
import { contents } from "./components/content";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems,
      sidebarMenuItems,
      content: contents.Main,
    }

    this.menuItemsHandleClick = this.menuItemsHandleClick.bind(this);
  }

  menuItemsHandleClick(i, className) {
    const menuName = className.replace('-menu__item', '');
    const items = this.state[`${menuName}MenuItems`];

    this.setState({
      items: items.map((item, index) => {
        item.isActive = i === index;
        return item;
      }),
      content: contents[`${items[i].name}`],
   });
  }

  render() {
    const mainMenuItems = this.state.mainMenuItems;
    const sidebarMenuItems = this.state.sidebarMenuItems;
    const content = this.state.content;

    return (
      <div className="app container">
        <Header
          mainMenuItems={mainMenuItems}
          handleClick={this.menuItemsHandleClick}
        />
        <div className="tile">
          <Sidebar 
            sidebarMenuItems={sidebarMenuItems}
            handleClick={this.menuItemsHandleClick}
          />
          <Main content={content} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
