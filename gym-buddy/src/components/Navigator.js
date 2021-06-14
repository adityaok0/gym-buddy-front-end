import React from "react";
import { BrowserRouter, MemoryRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { HomePage } from "./HomePage";
export function Navigator() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
