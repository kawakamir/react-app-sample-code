import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "pages/App";
import Hello from "pages/Hello";

export const Path = {
  app: "/",
  hello: "/a",
};

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.hello} component={Hello} />
      <Redirect to={Path.app} />
    </Switch>
  </BrowserRouter>
);

export default routes;
