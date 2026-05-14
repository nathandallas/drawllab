import { Link, useLocation } from "wouter";
import { Home, CircleQuestionMark } from "lucide-react";
import "./NavBar.css";
import Button from "../ui/Button/Button";

export default function NavBar({ className = "" }) {
  const [location] = useLocation();

  const navConfig = {
    "/": (
      <>
        <Link to="/canvas">
          <Button variant="primary">start drawing</Button>
        </Link>
        <Link to="/about">
          <Button>about</Button>
        </Link>
      </>
    ),
    "/about": (
      <>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/canvas">
          <Button variant="primary">start drawing</Button>
        </Link>
      </>
    ),
    "/canvas": (
      <>
        <Link to="/">
          <Button className="canvas-tools__button">
            <Home />
          </Button>
        </Link>
        <Link to="/about">
          <Button className="canvas-tools__button">
            <CircleQuestionMark />
          </Button>
        </Link>
      </>
    ),
  };

  return <nav className={`${className}`.trim()}>{navConfig[location] || navConfig["/"]}</nav>;
}
