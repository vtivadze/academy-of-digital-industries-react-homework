import PropTypes from 'prop-types';
import { Logo } from "../components";
import { MainMenuItem } from "../modules";
import { Login } from "./Login";
import { MainMenu } from "./MainMenu";

export const Header = props => {
  console.log(typeof props.handleClick);
  return (
    <header className="app-header section py-5 px-6 tile is-justify-content-space-between">
      <Logo />
      <MainMenu
        items={props.mainMenuItems}
        handleClick={props.handleClick}
      />
      <Login
        customButtonClickHandler={props.customButtonClickHandler}
      />
    </header>
  );
}

Header.defaultProps = {
  mainMenuItems: [new MainMenuItem(['item', '#', false])],
};

Header.propTypes = {
  mainMenuItems: PropTypes.array.isRequired,
};
