import "./App.css";
import Headers from "./component/Headers/Headers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Orders from "./component/Orders/Orders";
import Admin from "./component/Admin/Admin";
import Login from "./component/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import MenuItem from "./component/MenuItem/MenuItem";

export const createProvider = createContext();

function App() {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });
  return (
    <createProvider.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Headers></Headers>
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Headers></Headers>
            <Home></Home>
          </Route>
          <PrivateRoute path="/Orders">
            <Headers></Headers>
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/Admin">
            <Headers></Headers>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/item/:name">
            <Headers></Headers>
            <MenuItem></MenuItem>
          </PrivateRoute>
          <PrivateRoute path="/SingUp">
            <Headers></Headers>
            <Home></Home>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </createProvider.Provider>
  );
}

export default App;
