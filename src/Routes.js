import { Route, Switch } from "react-router";
import { Main as MainLayout } from "./layout";

export function Routes(props) {
  return <Switch>
    <Route path="/" exact>
      <MainLayout page="Main" />
    </Route>

    <Route path="/about">
      <MainLayout page="About" />
    </Route>

    <Route path="/services">
      <MainLayout page="Services" />
    </Route>

    <Route path="/staff">
      <MainLayout page="Staff" />
    </Route>

    <Route path="/login">
      <MainLayout page="Login" />
    </Route>

    <Route path="/signup">
      <MainLayout page="Signup" />
    </Route>

    <Route path="/check-email">
      <MainLayout page="CheckEmail" />
    </Route>

    <Route path="/new-password">
      <MainLayout page="NewPassword" />
    </Route>

    <Route path="/counters">
      <MainLayout page="Counters" />
    </Route>

    <Route path="/users">
      <MainLayout page="Users" />
    </Route>
  </Switch>;
};