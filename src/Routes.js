import { Route, Switch } from "react-router";
import { Main as MainLayout } from "./layout";
import * as route from "./constants/routes";
import { SecureComponent } from "./atoms/SecureComponent/SecureComponent";

export function Routes(props) {
  return <Switch>
    <Route path={ route.HOME_PATH } exact>
      <MainLayout page="Home" />
    </Route>

    <Route path={ route.ABOUT_PATH }>
      <MainLayout page="About" />
    </Route>

    <Route path={ route.SERVICES_PATH }>
      <MainLayout page="Services" />
    </Route>

    <Route path={ route.STAFF_PATH }>
      <MainLayout page="Staff" />
    </Route>

    <Route path={ route.LOGIN_PATH }>
      <MainLayout page="Login" />
    </Route>

    <Route path={ route.SIGNUP_PATH }>
      <MainLayout page="Signup" />
    </Route>

    <Route path={ route.CHECK_EMAIL_PATH }>
      <MainLayout page="CheckEmail" />
    </Route>

    <Route path={ route.NEW_PASSWORD_PATH }>
      <MainLayout page="NewPassword" />
    </Route>

    <Route path={ route.COUNTERS_PATH }>
      <MainLayout page="Counters" />
    </Route>

    <Route path={ route.USERS_PATH }>
      <MainLayout page="Users" />
    </Route>

    <Route path={ route.PROFILE_PATH }>
      <SecureComponent>
        <MainLayout page="Profile" />
      </SecureComponent>
    </Route>

    <Route path={ route.ACCESS_IS_DENIED_PATH }>
      <MainLayout page="AccessIsDenied" />
    </Route>
  </Switch>;
};