import React, { useContext } from "react";
import { GlobalContext } from "../../../App";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";

function Section6() {
  const { reviewList } = useContext(GlobalContext);

  return (
    <div className="HomePageSec6">
      <h1>Testimonials</h1>
      <div className="cardsHolding">
        {reviewList?.map((review) => {
          return <ReviewCard review={review} />;
        })}
      </div>
    </div>
  );
}

export default Section6;
