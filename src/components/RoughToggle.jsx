import { Wand, WandSparkles } from "lucide-react";
import useRoughMode from "../hooks/useRoughMode";
import IconButton from "./ui/IconButton/IconButton";
import "./RoughToggle.css";

const RoughToggle = () => {
  const { toggleStyle } = useRoughMode();

  return (
    <div className="rough-toggle">
      <IconButton onClick={toggleStyle}>
        <WandSparkles size={22} />
      </IconButton>
    </div>
  );
};

export default RoughToggle;
