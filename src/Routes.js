import { Route, Switch } from "react-router";
import { Main as MainLayout } from "./layout";

export function Routes(props) {
  return <Switch>
    <Route path="/" exact>
      <MainLayout page="Main" />
    </Route>

    <Route path="/about" exact>
      <MainLayout page="About" />
    </Route>

    <Route path="/services" exact>
      <MainLayout page="Services" />
    </Route>

    <Route path="/staff" exact>
      <MainLayout page="Staff" />
    </Route>

    <Route path="/login" exact>
      <MainLayout page="Login" />
    </Route>

    <Route path="/signup" exact>
      <MainLayout page="Signup" />
    </Route>

    <Route path="/check-email" exact>
      <MainLayout page="CheckEmail" />
    </Route>

    <Route path="/new-password" exact>
      <MainLayout page="NewPassword" />
    </Route>

    <Route path="/counters" exact>
      <MainLayout page="Counters" />
    </Route>

    <Route path="/users" exact>
      <MainLayout page="Users" />
    </Route>
  </Switch>;
};