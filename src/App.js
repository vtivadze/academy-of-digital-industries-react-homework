import { Header, Main, Footer, Sidebar } from "./components/layout";
import "./App.css";
import React from "react";
import { MainContent } from "./components/content";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: <MainContent />,
    }
  } 

  render() {
    const content = this.state.content;

    return (
      <div className="app">
        <Header />
        <Sidebar />
        <Main content={content} />
        <Footer />
      </div>
    );
  }
}

export default App;
