import PropTypes from "prop-types";
import { List } from "../components/menu";
import { MainMenuItem } from "../models";

export const MainMenu = props => {
  const items = props.items;

  return (
    <nav className="main-menu is-align-self-flex-end">
      <ul className="main-menu__container tile">
        <List
          items={ items }
          handleClick={ props.handleClick }
        />
      </ul>
    </nav>
  );
}

MainMenu.defaultProps = {
  items: new MainMenuItem(["item", "#", false, "main-menu__item"]),
};

MainMenu.propTypes = {
  items: PropTypes.arrayOf(MainMenuItem).isRequired,
};