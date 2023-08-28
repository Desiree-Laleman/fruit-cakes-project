import { useState } from "react";
import "./Splash.css";

const Splash = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="Splash">
      <section className="splash-page">
        <h1>Fruitcakes!</h1>
        <button onClick={() => setHidden(false)}>Build a Cake!</button>
      </section>
    </div>
  );
};

export default Splash;
