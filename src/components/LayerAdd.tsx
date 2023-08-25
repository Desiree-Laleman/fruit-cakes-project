import { useState } from "react";
import Layer from "../model/Layer";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";

interface Props {
  addLayer: (layer: Layer) => void;
}

const LayerAdd = ({ addLayer }: Props) => {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <button className="LayerAdd" onClick={() => setHidden((prev) => !prev)}>
        Add Layer
      </button>
      {hidden && <LayerForm setHidden={setHidden} addLayer={addLayer} />}
    </>
  );
};

export default LayerAdd;
