import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./model/Layer";
import { secureHeapUsed } from "crypto";
import Splash from "./components/Splash";
import Header from "./components/Header";

function App() {
  const [cakeArray, setCakeArray] = useState<Layer[]>([]);
  const [showSplash, setShowSplash] = useState(true);

  const addLayer = (layer: Layer): void => {
    setCakeArray((prev) => [layer, ...prev]);
  };

  const deleteLayer = (index: number): void => {
    setCakeArray((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  // console.log(cakeArray);
  return (
    <div className="App">
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && <Header />}
      <Cake cakeArray={cakeArray} />
      <CakeBuilder
        cakeArray={cakeArray}
        deleteLayer={deleteLayer}
        addLayer={addLayer}
      />
    </div>
  );
}

export default App;
