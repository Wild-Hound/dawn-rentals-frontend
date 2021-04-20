import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../App";

function ServiceCard(props) {
  const { setSelectedService } = useContext(GlobalContext);
  const history = useHistory();
  const { name, description } = props.service;

  function rentServiceAct(e) {
    console.log("Implement service here");
    setSelectedService({ name: name, description: description });
    history.push("/dashborad");
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
