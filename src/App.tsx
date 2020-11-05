import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

const HelloPage = React.lazy(() => import("pages/Hello"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Hello, World!!</h1>
    </div>
  );
};

export default hot(module)(App);
