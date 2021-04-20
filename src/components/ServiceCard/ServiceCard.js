import React from "react";

function ServiceCard(props) {
  const { name, description } = props.service;

  function rentServiceAct(e) {
    console.log("Implement service here");
  }

  return (
    <div className="serviceCard">
      <h2>{name}</h2>
      <p>{description}</p>
      <button
        className="generalActionBtn"
        onClick={(event) => rentServiceAct(event)}
      >
        Rent Service
      </button>
    </div>
  );
}

export default ServiceCard;
