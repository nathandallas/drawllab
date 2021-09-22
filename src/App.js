import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/canvas" component={CanvasPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
