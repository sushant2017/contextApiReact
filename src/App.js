import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Blog from "./screens/Blog";
import reducers from "./reducers";
import Home from "./screens/Home";
import User from "./screens/User";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <User>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </User>
  );
}

export default App;
