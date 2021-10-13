import { Logo } from "../Logo";
import { MainMenu } from "./MainMenu";

export const Header = props => {
  return (
    <header className="app-header">
      <Logo />
      <MainMenu
        items={props.mainMenuItems}
        handleClick={props.handleClick} />
    </header>
  );
}
