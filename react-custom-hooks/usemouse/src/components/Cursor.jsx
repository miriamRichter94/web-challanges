import useMouse from "../hooks/useMouse.js";
import "./Cursor.css";

export default function Cursor() {
  const [x, y] = useMouse();
  return (
    <div className="cursor">
      <div className="cursor__horizontal" style={{ top: `${y}px` }}></div>
      <div className="cursor__vertical" style={{ left: `${x}px` }}></div>
    </div>
  );
}
