import { List } from "../menu";

export const MainMenu = props => {
  const items = props.items;

  return (
    <nav className="main-menu">
      <ul className="main-menu__container">
        <List
          items={ items }
          handleClick={ props.handleClick }
        />
      </ul>
    </nav>
  );
}
