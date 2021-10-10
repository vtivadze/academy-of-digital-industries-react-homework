import { Menu } from "./main-menu";
import { Logo } from "../.";

export function Header() {
  return (
    <header className="app-header">
      <Logo />
      <Menu />
    </header>
  );
}
