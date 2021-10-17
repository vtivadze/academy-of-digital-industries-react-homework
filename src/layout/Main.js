import React from "react";
import { mainContents } from "../content";

export const Main = (props) => {
  return (
    <main className="app-main column is-vertical py-5 px-6">
      {mainContents[props.content]}
    </main>
  );
}
