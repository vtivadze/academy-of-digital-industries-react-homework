import { Logo } from "../Logo";
import { MainMenu } from "./MainMenu";

export const Header = props => {
  return (
    <header className="app-header section py-5 px-6 tile is-justify-content-space-between">
      <Logo />
      <MainMenu
        items={props.mainMenuItems}
        handleClick={props.handleClick} />
    </header>
  );
}
