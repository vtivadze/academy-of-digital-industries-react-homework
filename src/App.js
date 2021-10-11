import React from "react";

import { Header, Main, Footer, Sidebar } from "./components/layout";
import { mainMenuItems } from "./api";
import { contents } from "./components/content";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenuItems: mainMenuItems,
      content: contents.Main,
    }

    this.mainMenuItemsHandleClick = this.mainMenuItemsHandleClick.bind(this);
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

  render() {
    const mainMenuItems = this.state.mainMenuItems;
    const content = this.state.content;

    return (
      <div className="app">
        <Header
          mainMenuItems={mainMenuItems}
          handleClick={this.mainMenuItemsHandleClick} />
        <Sidebar />
        <Main content={content} />
        <Footer />
      </div>
    );
  }
}

export default App;
