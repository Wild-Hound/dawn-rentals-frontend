import React from "react";
import FindRentalForm from "../../../components/FindRentalForm/FindRentalForm";

function Section1() {
  return (
    <div className="HomePageSec1">
      <div>
        <h1>Top-Of-The-Line Equipment Ready At Flexible Rates Around</h1>
        <p>Your One-Stop Source For All Equipment Rental Needs</p>
        <button className="generalActionBtn">View All Rentals</button>
      </div>
      <div className="rental_form_con">
        <h2>Find The Right Equipment</h2>
        <FindRentalForm />
      </div>
    </div>
  );
}

export default Section1;
