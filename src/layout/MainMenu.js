import { List } from '../components/menu';
import { mainMenuItems } from '../api';

export const MainMenu = () => {
  const items = mainMenuItems;

  return (
    <nav className="main-menu is-align-self-flex-end">
      <ul className="main-menu__container tile">
        <List items={items} />
      </ul>
    </nav>
  );
};
