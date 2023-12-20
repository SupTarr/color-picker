import { useState } from "react";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";

const App = () => {
  const [color, setColor] = useState("");

  return (
    <main className="flex min-h-screen flex-col flex-wrap content-center justify-center">
      <ColorBox color={color} />
      <ColorInput color={color} setColor={setColor} />
    </main>
  );
};

export default App;
