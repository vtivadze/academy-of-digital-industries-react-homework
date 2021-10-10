import { mainMenuItems } from ".";
import { Item } from ".";

export const Menu = () => {
  const items = mainMenuItems.map(({name, href, isActive}, index) => {
    return (
      <Item
        key={`${index}-${name}`}
        className="main-menu__item"
        name={name}
        href={href}
        isActive={isActive}
      />
    );
  });

  return (
    <nav className="main-menu">
      <ul className="main-menu__container">
        {items}
      </ul>
    </nav>
  );
}
