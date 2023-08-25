import Layer from "../model/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface Props {
  cakeArray: Layer[];
  deleteLayer: (index: number) => void;
  addLayer: (layer: Layer) => void;
}

const CakeBuilder = ({ cakeArray, deleteLayer, addLayer }: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerAdd addLayer={addLayer} />
      <LayerBuilder cakeArray={cakeArray} deleteLayer={deleteLayer} />
    </div>
  );
};

export default CakeBuilder;
