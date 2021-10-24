import PropTypes from "prop-types";
import React from "react";
import { pages } from "../pages";

export const Main = ({ page }) => {
  console.log(page);
  const Page = pages[page];

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
