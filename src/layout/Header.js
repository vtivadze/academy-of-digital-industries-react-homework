import PropTypes from "prop-types";
import { Logo } from "../components";
import { MainMenuItem } from "../models";
import { Login } from "./Login";
import { MainMenu } from "./MainMenu";

export const Header = props => {

  return (
    <header className="app-header section py-5 px-6 tile is-justify-content-space-between">
      <Logo />
      <MainMenu items={props.mainMenuItems} />
      <Login />
    </header>
  );
}

Header.defaultProps = {
  mainMenuItems: [new MainMenuItem(["item", "#", "main-menu__item"])],
};

Header.propTypes = {
  mainMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};
