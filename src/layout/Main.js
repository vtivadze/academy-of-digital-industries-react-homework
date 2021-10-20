import PropTypes from "prop-types";
import React from "react";
import { mainContents } from "../content";

export const Main = (props) => {
  const Component = mainContents[props.content];

  return (
    <main className="app-main column is-vertical py-5 px-6">
      <Component />
    </main>
  );
}

Main.defaultProps = {
  content: "Main",
}

Main.propTypes = {
  content: PropTypes.string.isRequired,
};
