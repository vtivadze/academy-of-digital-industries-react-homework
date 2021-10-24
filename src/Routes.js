import { Route, Switch } from "react-router";
import { Main } from "./layout";

export function Routes(props) {
  return <Switch>
    <Route path="/" exact>
      <Main
        content={props.content}
        customButtonClickHandler={props.customButtonClickHandler}
      />
    </Route>
  </Switch>;
};