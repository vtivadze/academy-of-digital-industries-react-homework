import { List } from "../components/menu";

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
