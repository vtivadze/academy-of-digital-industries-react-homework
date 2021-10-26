import { Logo } from '../components';
import { Login } from './Login';
import { MainMenu } from './MainMenu';

export const Header = () => {
  return (
    <header className="app-header section py-5 px-6 tile is-justify-content-space-between">
      <Logo />
      <MainMenu />
      <Login />
    </header>
  );
};
