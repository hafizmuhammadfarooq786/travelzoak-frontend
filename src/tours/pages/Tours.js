import React from "react";

import NewsLetter from "../../shared/components/UIElements/NewsLetter";
import DestinationsList from "../../destinations/components/DestinationsList";
import Destination1 from "../../images/destination_1.jpg";
import Destination2 from "../../images/destination_2.jpg";
import Destination3 from "../../images/destination_3.jpg";
import Destination4 from "../../images/destination_4.jpg";
import Destination5 from "../../images/destination_5.jpg";
import Destination6 from "../../images/destination_6.jpg";

export default function Tours() {
  const DestinationArr = [
    {
      title: "Singapore",
      image: Destination1,
      duration: "4 Nights / 3 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$1599",
    },
    {
      title: "Thailand",
      image: Destination2,
      duration: "5 Nights / 4 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$2599",
    },
    {
      title: "Vietnam",
      image: Destination3,
      duration: "6 Nights / 5 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$4599",
    },
    {
      title: "Melbourne",
      image: Destination4,
      duration: "4 Nights / 3 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$2599",
    },
    {
      title: "Maldives",
      image: Destination5,
      duration: "8 Nights / 7 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$7000",
    },
    {
      title: "Sri Lanka",
      image: Destination6,
      duration: "9 Nights / 8 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$8999",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="page-caption">
                <h1 class="page-title">Domestic Tour</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header */}
      {/* destination-section */}
      <div class="content">
        <div class="container">
          <DestinationsList items={DestinationArr} space={false} />
        </div>
      </div>
      {/* /.destination-section */}
      <NewsLetter />
    </div>
  );
}
