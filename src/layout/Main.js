import PropTypes from "prop-types";
import React from "react";
import { mainContents } from "../content";

export const Main = ({ page }) => {
  const Page = mainContents[page];

  return (
    <main className="app-main column is-vertical py-5 px-6">
      <Page />
    </main>
  );
}

Main.defaultProps = {
  page: "Main",
}

Main.propTypes = {
  page: PropTypes.string.isRequired,
};
