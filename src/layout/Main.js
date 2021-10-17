import React from "react";
import { mainContents } from "../content";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.component = mainContents[props.content];
  }

  render() {
    return (
      <main className="app-main column is-vertical py-5 px-6">
        {this.component}
      </main>
    );
  }
}
