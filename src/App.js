import React from "react";

// import { Routes } from "./Routes";
import { Header, Footer, Sidebar, Main } from "./layout";
import { mainMenuItems, sidebarMenuItems } from "./api";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems,
      sidebarMenuItems,
      mainContent: "Home",
    }
  }
  render() {
    const mainMenuItems = this.state.mainMenuItems;
    const sidebarMenuItems = this.state.sidebarMenuItems;
 
    return (
      <div className="app">
        <div className="container">
          <Header mainMenuItems={mainMenuItems} />
        </div>
        <div className="container column">
          <div className="columns is-gapeless">
            <Sidebar 
              sidebarMenuItems={sidebarMenuItems}
            />
            <Main />
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
