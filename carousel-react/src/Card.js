import React from "react";
import PropTypes from "prop-types";

const Card = ({ property }) => {
  const { index, picture, name, poste } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={name} />
      <div className="details">
        <p className="location">
          {name}
          <br />
          {poste}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
