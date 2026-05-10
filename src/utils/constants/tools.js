import { MousePointer, Pencil, Eraser, Square, Circle, SquareDashed, Move } from "lucide-react";

export const TOOLS = [
  {
    id: "pen",
    icon: Pencil,
    name: "Pen",
    description: "Draw freehand lines and shapes",
  },
  {
    id: "eraser",
    icon: Eraser,
    name: "Eraser",
    description: "Remove unwanted strokes or elements",
  },
  {
    id: "rectangle",
    icon: Square,
    name: "Rectangle",
    description: "Draw rectangular shapes",
  },
  {
    id: "circle",
    icon: Circle,
    name: "Circle",
    description: "Draw circular and elliptical shapes",
  },
  {
    id: "marquee",
    icon: SquareDashed,
    name: "Marquee",
    description: "Make rectangular selections",
  },
  {
    id: "move",
    icon: Move,
    name: "Move Tool",
    description: "Reposition elements on the canvas",
  },
];

export const getToolById = id => TOOLS.find(tool => tool.id === id);
