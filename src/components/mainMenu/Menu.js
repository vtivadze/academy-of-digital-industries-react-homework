import mainMenuItems from "../../data/mainMenuItems";
import Item from "./Item";

const Menu = () => {
    const items = mainMenuItems.map(({name, href, isActive}, index) => {
        return (
            <Item
                key={index}
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

export default Menu;