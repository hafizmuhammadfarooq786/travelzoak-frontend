import React from 'react';

import DestinationItem from './DestinationItem';
import Card from '../../shared/components/UIElements/Card';
import './DestinationsList.css';

export default function destinationsList(props) {

    if(props.items.length === 0){
        return (
          <div className="center">
          <Card>
            <h2>No destinations found.</h2>
          </Card>
        </div>
          )
    }
  return (
    <ul className="destinations-list">
    {props.items.map(destination => (
      <DestinationItem
        key={destination.id}
        id={destination.id}
        image={destination.image}
        className={destination.className}
        name={destination.name}
        description = {destination.description}
      />
    ))}
  </ul>
  )
}
