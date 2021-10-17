import React from "react";

import { Header, Main, Footer, Sidebar } from "./layout";
import { mainMenuItems, sidebarMenuItems } from "./api";
import { mainContents } from "./content";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems,
      sidebarMenuItems,
      mainContent: mainContents.Main,
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
      mainContent: mainContents[`${items[i].name}`],
   });
  }

  render() {
    const mainMenuItems = this.state.mainMenuItems;
    const sidebarMenuItems = this.state.sidebarMenuItems;
    const mainContent = this.state.mainContent;

    return (
      <div className="app">
        <div className="container">
          <Header
            mainMenuItems={mainMenuItems}
            handleClick={this.menuItemsHandleClick}
          />
        </div>
        <div className="container column">
          <div className="columns is-gapeless">
            <Sidebar 
              sidebarMenuItems={sidebarMenuItems}
              handleClick={this.menuItemsHandleClick}
            />
            <Main content={mainContent} />
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
