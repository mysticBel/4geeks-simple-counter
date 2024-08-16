import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card bg-dark text-white p-3">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faClock} size="2x" className="me-3" />
          <h1>{props.seconds}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
