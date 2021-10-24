import { Route, Switch } from "react-router";
import { Main } from "./layout";

export function Routes(props) {
  return <Switch>
    <Route path="/" exact>
      <Main
        content="Main"
        customButtonClickHandler={props.customButtonClickHandler}
      />
    </Route>

    <Route path="/about" exact>
      <Main content="About" />
    </Route>

    <Route path="/services" exact>
      <Main content="Services" />
    </Route>

    <Route path="/staff" exact>
      <Main content="Staff" />
    </Route>

    <Route path="/login" exact>
      <Main content="Login" />
    </Route>

    <Route path="/singup" exact>
      <Main content="Signup" />
    </Route>

    <Route path="/counter" exact>
      <Main content="Counter" />
    </Route>

    <Route path="/users" exact>
      <Main content="Users" />
    </Route>
  </Switch>;
};