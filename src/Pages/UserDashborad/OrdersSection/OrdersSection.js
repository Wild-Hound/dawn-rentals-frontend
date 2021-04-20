import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";

function OrdersSection() {
  const { selectedService, email, setReRender } = useContext(GlobalContext);

  function handlePayment(token) {
    if (token.id) {
      let x = {
        name: email.email,
        service: selectedService.name,
        status: ["pending"],
      };
      fetch("https://newtest404.herokuapp.com/add/order", {
        method: "POST",
        body: JSON.stringify(x),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReRender(true);
        });
    }
  }

  return (
    <div className="orderSection">
      <div className="OSheader">
        <div>
          <span>Email:</span>
          <h3>{email.email}</h3>
        </div>
        <div>
          <span>Selected Service:</span>
          <h3>{selectedService.name}</h3>
        </div>
      </div>
      <div className="paymentArea">
        <span>Pay With Stripe</span>
        <StripeCheckout
          stripeKey="pk_test_51IiPAzHZtJd2okwQqbmaikpHrtyscidOIalQeVSSP34NUHtIF9TFzh7Z77qlB1XTyCjjWRySUuvd9bS4Lg8GrVdR00e5gBvsZ4"
          token={handlePayment}
          amount={10.34 * 100}
        />
      </div>
    </div>
  );
}

export default OrdersSection;
