import { useState } from "react";
import Layer from "../model/Layer";
import "./LayerAdd.css";
import LayerForm from "./LayerForm";

interface Props {
  cakeArray: Layer[];
}

const LayerAdd = () => {
  // const addLayer = ({ cakeArray }: Props) => {
  //   cakeArray.map((item) => item);
  // };

  const [hidden, setHidden] = useState(false);

  return (
    <>
      <button className="LayerAdd" onClick={() => setHidden((prev) => !prev)}>
        Add Layer
      </button>
      {hidden && <LayerForm setHidden={setHidden} />}
    </>
  );
};

export default LayerAdd;
