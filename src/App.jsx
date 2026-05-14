import "./App.css";
import { Router, Route, Switch } from "wouter";
import HomePage from "./pages/HomePage/HomePage";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import useRoughMode from "./hooks/useRoughMode";

const App = () => {
  useRoughMode();
  return (
    <Router base="/drawllab">
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/canvas" component={CanvasPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
