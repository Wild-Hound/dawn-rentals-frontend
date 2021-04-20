import React from "react";

function ReviewCard(props) {
  const { name, description } = props.review;
  return (
    <div className="reviewCard">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ReviewCard;
