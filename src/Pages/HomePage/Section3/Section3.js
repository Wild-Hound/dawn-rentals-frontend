import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faMedal,
  faMoneyCheckAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

function Section3() {
  return (
    <div className="HomePageSec3">
      <div>
        <div>
          <span>3.4k</span>
          <FontAwesomeIcon icon={faBusinessTime} />
        </div>
        <h3>Helping Projects Done</h3>
        <p>Best thing about Antek is to earn some on their equipments.</p>
      </div>
      <div>
        <div>
          <span>25+</span>
          <FontAwesomeIcon icon={faMedal} />
        </div>
        <h3>Years In Rent Business</h3>
        <p>Best thing about Antek is to earn some on their equipments.</p>
      </div>
      <div>
        <div>
          <span>18+</span>
          <FontAwesomeIcon icon={faMoneyCheckAlt} />
        </div>
        <h3>Received Awards So far</h3>
        <p>Best thing about Antek is to earn some on their equipments.</p>
      </div>
      <div>
        <div>
          <span>5.9%</span>
          <FontAwesomeIcon icon={faTools} />
        </div>
        <h3>Earned Revenue This Year</h3>
        <p>Best thing about Antek is to earn some on their equipments.</p>
      </div>
    </div>
  );
}

export default Section3;
