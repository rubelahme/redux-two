import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { createProvider } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(createProvider);
  console.log(setUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
