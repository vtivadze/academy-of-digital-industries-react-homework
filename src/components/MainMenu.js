function MainMenu() {
    return (
        <nav className="main-menu">
            <ul className="main-menu__container">
                <li className="main-menu__item main-menu__item--active">
                    <a className="main-menu__item-link" href="#">Home</a>
                </li>
                <li className="main-menu__item">
                    <a className="main-menu__item-link" href="#">About</a>
                </li>
                <li className="main-menu__item">
                    <a className="main-menu__item-link" href="#">Services</a>
                </li>
                <li className="main-menu__item">
                    <a className="main-menu__item-link" href="#">Staff</a>
                </li>
                <li className="main-menu__item">
                    <a className="main-menu__item-link" href="#">Contacts</a>
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;