import React, {useState} from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

function Toggle(){
  const [stateButton, setStateButton] = useState(false);


  const handleClick = () => {
    if (stateButton) {
      setStateButton(false); // Cambiar a apagado si ya está encendido
    } else {
      setStateButton(true); // Cambiar a encendido si está apagado
    }
  };
  return (
<button onClick= {handleClick}>{stateButton ? "ON" : "OFF"} </button>
  );
}


const container = document.getElementById('root');
if (container) {
  ReactDOM.render(
    <React.StrictMode>
      <Toggle />
    </React.StrictMode>,
    container
  );
}
  


export default Toggle;