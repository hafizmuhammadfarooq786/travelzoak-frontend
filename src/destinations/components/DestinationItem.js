// DestinationItem.js
import React from "react";
import { Link } from "react-router-dom";

const DestinationItem = ({ destination, space }) => (
  <div
    className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ${
      space ? "p-0" : ""
    }`}
  >
    <div className="destination-block">
      <div className="desti-img">
        <img src={destination.image} alt="" />
        <Link to={`/`} className="desti-title">
          {destination.title}
        </Link>
        <div className="overlay"></div>
        <div className="text">
          <h3 className="mb20 text-white">{destination.title}</h3>
          <ul className="angle list-none">
            <li>{destination.duration}</li>
            <li>{destination.hotel}</li>
            <li>{destination.meals}</li>
          </ul>
          <p className="price">{destination.price}</p>
          <Link to={`/`} className="btn-link">
            Go for {destination.title} <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DestinationItem;
