import { MousePointer, Pencil, Eraser, Square, Circle, SquareDashed, Move, Slash } from "lucide-react";

export const TOOLS = [
  {
    id: "colorpicker",
    icon: Circle,
    name: "Color Picker",
    description: "Choose a color.",
  },
  {
    id: "pen",
    icon: Pencil,
    name: "Pen",
    description: "Draw freehand.",
  },
  {
    id: "eraser",
    icon: Eraser,
    name: "Eraser",
    description: "Erase unwanted strokes or elements.",
  },
    {
    id: "line",
    icon: Slash,
    name: "Straight Line",
    description: "Draw a straight line.",
  },
  {
    id: "rectangle",
    icon: Square,
    name: "Rectangle",
    description: "Draw a rectangle.",
  },
  {
    id: "circle",
    icon: Circle,
    name: "Circle",
    description: "Draw a circle.",
  },
  {
    id: "marquee",
    icon: SquareDashed,
    name: "Marquee",
    description: "Select elements on the canvas.",
  },
  {
    id: "move",
    icon: Move,
    name: "Move Tool",
    description: "Reposition elements on the canvas.",
  },
];

export const getToolById = id => TOOLS.find(tool => tool.id === id);
