import React from 'react';
import { Link } from 'react-router-dom';

import './ServiceItem.css';

export default function ServiceItem(props) {
  return (
    <li className="service-item">
        <div className="service-item__content">
            <Link to={`/`}>
                <div className="service-item__image">
                  <img src={props.image} alt={props.name} width={50} height={50} />
                </div>
                <div className="service-item__info">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                </div>
            </Link>
        </div>
    </li>
  )
}
