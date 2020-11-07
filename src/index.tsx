import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import routes from "routes";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>,
  document.getElementById("root")
);
