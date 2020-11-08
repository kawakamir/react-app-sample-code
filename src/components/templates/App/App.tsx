import React from "react";
import { AppStyles } from "components/templates/App/AppStyles";
import { Link } from "react-router-dom";
import { Path } from "routes";

const AppTemp: React.FC = () => {
  return (
    <>
      <AppStyles>
        <h1>Hello, World!!</h1>
      </AppStyles>
      <Link to={Path.hello}>helloページへのリンク</Link>
    </>
  );
};

export default AppTemp;
