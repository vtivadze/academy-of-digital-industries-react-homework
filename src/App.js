import React from "react";

import { Header, Main, Footer, Sidebar } from "./layout";
import { mainMenuItems, sidebarMenuItems } from "./api";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems,
      sidebarMenuItems,
      mainContent: "NewPasswordForm",
    }

    this.menuItemsHandleClick = this.menuItemsHandleClick.bind(this);
    this.customButtonClickHandler = this.customButtonClickHandler.bind(this);
  }

  menuItemsHandleClick(i, className) {
    const menuName = className.replace('-menu__item', '') + "MenuItems";

    this.setState((state) => ({
      menuName: state[menuName].map((item, index) => {
        item.isActive = i === index;
        return item;
      }),
      mainContent: state[menuName][i].name,
   }));
  }

  customButtonClickHandler(itemName) {
    this.setState({mainContent: itemName});
  };

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
            customButtonClickHandler={this.customButtonClickHandler}
          />
        </div>
        <div className="container column">
          <div className="columns is-gapeless">
            <Sidebar 
              sidebarMenuItems={sidebarMenuItems}
              handleClick={this.menuItemsHandleClick}
            />
            <Main
              content={mainContent}
              customButtonClickHandler={this.customButtonClickHandler}
            />
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
