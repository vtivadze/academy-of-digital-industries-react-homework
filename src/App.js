import React from "react";

import { Header, Main, Footer, Sidebar } from "./components/layout";
import { mainMenuItems, sidebarMenuItems } from "./api";
import { contents } from "./components/content";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems: mainMenuItems,
      sidebarMenuItems: sidebarMenuItems,
      content: contents.Main,
    }

    this.mainMenuItemsHandleClick = this.mainMenuItemsHandleClick.bind(this);
    this.sidebarMenuItemsHandleClick = this.sidebarMenuItemsHandleClick.bind(this);
  }

  mainMenuItemsHandleClick(i) {
    const items = this.state.mainMenuItems;
    this.setState({
      items: items.map((item, index) => {
        item.isActive = i === index;
        return item;
      }),
      content: contents[`${items[i].name}`],
   });
  }

  sidebarMenuItemsHandleClick(i) {
    const items = this.state.sidebarMenuItems;
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
      <div className="app">
        <Header
          mainMenuItems={mainMenuItems}
          handleClick={this.mainMenuItemsHandleClick}
        />
        <Sidebar 
          sidebarMenuItems={sidebarMenuItems}
          handleClick={this.sidebarMenuItemsHandleClick}
        />
        <Main content={content} />
        <Footer />
      </div>
    );
  }
}

export default App;
