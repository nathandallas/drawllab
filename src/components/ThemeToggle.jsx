import useTheme from "../hooks/useTheme";
import "./ThemeToggle.css";
import lightIcon from "../assets/images/light-mode.png";
import darkIcon from "../assets/images/dark-mode.png";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle">
      <button className="btn" onClick={toggleTheme}>
        <img
          className="toggle-icon"
          src={theme === "light" ? lightIcon : darkIcon}
          alt={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
