import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./model/Layer";

function App() {
  const [cakeArray, setCakeArray] = useState<Layer[]>([]);

  const addLayer = (layer: Layer): void => {
    setCakeArray((prev) => [layer, ...prev]);
  };

  console.log(cakeArray);
  return (
    <div className="App">
      <Cake cakeArray={cakeArray} />
      <CakeBuilder cakeArray={cakeArray} />
    </div>
  );
}

export default App;
