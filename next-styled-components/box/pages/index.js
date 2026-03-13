import BoxWithStyledComponent from "@/components/BoxWithStyledComponent/BoxWithStyledComponent.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponent />
      <BoxWithStyledComponent isBlack />
    </div>
  );
}
