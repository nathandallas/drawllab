import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import IconButton from "./ui/IconButton/IconButton";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle">
      <IconButton onClick={toggleTheme}>{theme === "light" ? <Moon size={24} /> : <Sun size={22} />}</IconButton>
    </div>
  );
};

export default ThemeToggle;
