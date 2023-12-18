import React from "react";

import DestinationItem from "./DestinationItem";
import Card from "../../shared/components/UIElements/Card";
import "./DestinationsList.css";

export default function DestinationsList(props) {
  console.log(props);

  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No destinations found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <div className="row">
      {props.items.map((destination, index, space) => (
        <DestinationItem key={index} destination={destination} space={space} />
      ))}
    </div>
  );
}
