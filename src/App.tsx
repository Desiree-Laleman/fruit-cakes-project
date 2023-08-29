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

  const cakeHeight = cakeArray.reduce((ac, cv) => cv.height + ac, 0);

  // console.log(cakeArray);
  return (
    <div className="App">
      {showSplash && <Splash setShowSplash={setShowSplash} />}

      {!showSplash && (
        <>
          <Header />{" "}
          <div id="content-container">
            <Cake cakeArray={cakeArray} cakeHeight={cakeHeight} />
            <CakeBuilder
              cakeArray={cakeArray}
              deleteLayer={deleteLayer}
              addLayer={addLayer}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
