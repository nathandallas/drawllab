import { Link } from "wouter";
import { Home, CircleHelp } from "lucide-react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <Home size={24} className="nav__icon click" />
      </Link>
      <Link to="/about">
        <CircleHelp size={24} className="nav__icon click" />
      </Link>
    </nav>
  );
}
