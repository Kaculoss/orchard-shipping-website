import React from "react";

const BulletPoints = ({ head, point }) => {
  return (
    <div>
      <h5>{head}</h5>
      <p>{point}</p>
    </div>
  );
};

export default BulletPoints;
