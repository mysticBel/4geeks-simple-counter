//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./component/secondsCounter.jsx";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return; // Si no está activo, no hace nada

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (isCountingDown) {
          return prevSeconds > 0 ? prevSeconds - 1 : 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCountingDown, isActive]);

  const startCountdown = () => {
    const countdownNumber = prompt(
      "Ingrese el número de segundos para la cuenta regresiva:"
    );
    setSeconds(Number(countdownNumber));
    setIsCountingDown(true);
    setIsActive(true);
  };

  const startCountup = () => {
    setSeconds(0);
    setIsCountingDown(false);
    setIsActive(true);
  };

  const stopCounter = () => {
    setIsActive(false); // para detener
  };

  return (
    <>
      <SecondsCounter seconds={seconds.toString().padStart(6, "0")} />
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary me-2" onClick={startCountup}>
          Contar hacia arriba
        </button>
        <button className="btn btn-danger me-2" onClick={startCountdown}>
          Iniciar cuenta regresiva
        </button>
        <button className="btn btn-secondary" onClick={stopCounter}>
          Detener
        </button>
      </div>
    </>
  );
};

// Render your react application
ReactDOM.createRoot(document.getElementById("app")).render(<Counter />);
