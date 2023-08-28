import { useState } from "react";
import "./Splash.css";

interface Props {
  setShowSplash: (boolean: boolean) => void;
}

const Splash = ({ setShowSplash }: Props) => {
  return (
    <div className="Splash">
      <section className="splash-page">
        <h1>Fruitcakes!</h1>
        <button onClick={() => setShowSplash(false)}>Build a Cake!</button>
      </section>
    </div>
  );
};

export default Splash;
