import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CounterPage from "./pages/CounterPage";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/" exact>
            <CounterPage />
          </Route>
          <Route path="/form" exact>
            <FormPage />
          </Route>
          <Route path="/list" exact>
            <ListPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
