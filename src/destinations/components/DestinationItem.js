import React from 'react';
import { Link } from 'react-router-dom';

import './DestinationItem.css';

export default function destinationItem(props) {

  const imageSize = window.innerWidth >= 769 ? 400 : 300;

  return (
    <li className="destination-item">
        <div className="destination-item__content">
          <div className="destination-item__image">
            <img src={props.image} alt={props.name} width={imageSize} height={imageSize} />
            <div class="destination-overlay"></div>
          <div class="destination-overlay-front"></div>
          </div>
            <div className="destination-item__info">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <Link to={`/`}>View All Tours</Link>
            </div>
        </div>
    </li>
  )
}
