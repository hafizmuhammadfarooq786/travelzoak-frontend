import React from 'react';

import ServiceItem from './ServiceItem';
import Card from '../../shared/components/UIElements/Card';
import './ServicesList.css';

export default function ServicesList(props) {

    if(props.items.length === 0){
        return (
          <div className="center">
          <Card>
            <h2>No services found.</h2>
          </Card>
        </div>
          )
    }
  return (
    <ul className="services-list">
    {props.items.map(service => (
      <ServiceItem
        key={service.id}
        id={service.id}
        image={service.image}
        className={service.className}
        name={service.name}
        description = {service.description}
      />
    ))}
  </ul>
  )
}
