import "./CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

const CakeBuilder = () => {
  return (
    <div className="CakeBuilder">
      <LayerBuilder />
      <LayerAdd />
    </div>
  );
};

export default CakeBuilder;
