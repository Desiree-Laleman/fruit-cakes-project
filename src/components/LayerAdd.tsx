import { useState } from "react";
import Layer from "../model/Layer";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";

interface Props {
  addLayer: (layer: Layer) => void;
}

const LayerAdd = ({ addLayer }: Props) => {
  const [hidden, setHidden] = useState(false);

  const handleLayerSubmit = (layer: Layer) => {
    setHidden(false); // Hide the form after submission
    addLayer(layer); // Call the addLayer function from CakeBuilder
  };

  return (
    <>
      <button className="LayerAdd" onClick={() => setHidden((prev) => !prev)}>
        Add Layer
      </button>
      {hidden && (
        <LayerForm setHidden={setHidden} addLayer={handleLayerSubmit} />
      )}
    </>
  );
};

export default LayerAdd;
