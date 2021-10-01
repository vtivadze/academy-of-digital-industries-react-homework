import MainMenu from "./MainMenu";
import Logo from "./Logo";

function Header() {
    return (
        <header className="app-header">
            <Logo />
            <MainMenu />
        </header>
    );
}

export default Header;