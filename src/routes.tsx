import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import App from "App";
import { Hello } from "pages";

export const Path = {
  app: "/",
  hello: "/a",
};

const routes = (
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.hello} component={Hello} />
    <Redirect to={Path.app} />
  </Switch>
);

export default routes;
