import { Route, Switch } from 'react-router';
import * as route from './constants/routes';
import { SecureComponent } from './atoms';
import * as pages from './pages';

export function Routes(props) {
  return (
    <Switch>
      <Route path={route.INDEX_PATH} exact>
        <pages.Home />
      </Route>

      <Route path={route.HOME_PATH} exact>
        <pages.Home />
      </Route>

      <Route path={route.ABOUT_PATH}>
        <pages.About />
      </Route>

      <Route path={route.SERVICES_PATH}>
        <pages.Services />
      </Route>

      <Route path={route.STAFF_PATH}>
        <pages.Staff />
      </Route>

      <Route path={route.LOGIN_PATH}>
        <pages.Login />
      </Route>

      <Route path={route.REGISTER_PATH}>
        <pages.Register />
      </Route>

      <Route path={route.CHECK_EMAIL_PATH}>
        <pages.CheckEmail />
      </Route>

      <Route path={route.SET_NEW_PASSWORD_PATH}>
        <pages.SetNewPassword />
      </Route>

      <Route path={route.COUNTERS_PATH}>
        <pages.Counters />
      </Route>

      <Route path={route.USERS_PATH}>
        <pages.Users />
      </Route>

      <Route path={route.NEWS_PATH}>
        <SecureComponent Page={pages.News} />
      </Route>

      <Route path={route.PROFILE_PATH}>
        <SecureComponent
          Page={pages.Profile}
          parameter="Parameter passed from Routes SecureComponent"
        />
      </Route>

      <Route path={route.ACCESS_IS_DENIED_PATH}>
        <pages.AccessIsDenied />
      </Route>
    </Switch>
  );
}
