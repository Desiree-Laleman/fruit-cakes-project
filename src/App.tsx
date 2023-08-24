import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Layer from "./model/Layer";

function App() {
  const [cakeArray, setCakeArray] = useState<Layer[]>([]);
  return (
    <div className="App">
      <Cake cakeArray={cakeArray} />
      <CakeBuilder />
    </div>
  );
}

export default App;
