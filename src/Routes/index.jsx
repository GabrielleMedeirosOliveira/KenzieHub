import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import { useState, useEffect } from "react";
const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <Switch>
      <Route path="/" exact>
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
export default Routes;
