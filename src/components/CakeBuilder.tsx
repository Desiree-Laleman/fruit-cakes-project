import Layer from "../model/Layer";
import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface Props {
  cakeArray: Layer[];
}

const CakeBuilder = ({ cakeArray }: Props) => {
  return (
    <div className="CakeBuilder">
      <LayerBuilder cakeArray={cakeArray} />
      <LayerAdd />
    </div>
  );
};

export default CakeBuilder;
