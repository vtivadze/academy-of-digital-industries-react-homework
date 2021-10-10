import { Logo } from "../Logo";
import { MainMenu } from "./MainMenu";

export function Header() {
  return (
    <header className="app-header">
      <Logo />
      <MainMenu />
    </header>
  );
}
