import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ColorPicker from "./components/ColorPicker/ColorPicker";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/canvas" component={CanvasPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/color" component={ColorPicker} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
