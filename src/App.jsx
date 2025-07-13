import "./App.scss";
import React from "react";
import { Route, Switch } from "wouter";
import HomePage from "./pages/HomePage/HomePage";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/canvas" component={CanvasPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default App;
