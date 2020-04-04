import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { Home } from './pages/Login';
import { Register } from './pages/Register'
import { Update } from "./pages/Update";


const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/update" component={Update} />
      </Switch>
    </Router>
  );
};

export default Routes;
