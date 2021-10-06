import Menu from "./mainMenu/Menu";
import Logo from "./Logo";

function Header() {
    return (
        <header className="app-header">
            <Logo />
            <Menu />
        </header>
    );
}

export default Header;