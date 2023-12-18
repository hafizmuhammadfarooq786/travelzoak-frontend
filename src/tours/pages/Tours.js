import React from "react";
import { Link } from "react-router-dom";

import Destination1 from "../../images/destination_1.jpg";
import Destination2 from "../../images/destination_2.jpg";
import Destination3 from "../../images/destination_3.jpg";
import Destination4 from "../../images/destination_4.jpg";
import Destination5 from "../../images/destination_5.jpg";
import Destination6 from "../../images/destination_6.jpg";
import NewsLetter from "../../shared/components/UIElements/NewsLetter";

export default function Tours() {
  const DestinationArr = [
    {
      title: "Singapore",
      image: "images/destination_1.jpg",
      duration: "4 Nights / 3 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$1599",
    },
    {
      title: "Thailand",
      image: "images/destination_2.jpg",
      duration: "5 Nights / 4 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$2599",
    },
    {
      title: "Vietnam",
      image: "images/destination_3.jpg",
      duration: "6 Nights / 5 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$4599",
    },
    {
      title: "Melbourne",
      image: "images/destination_4.jpg",
      duration: "4 Nights / 3 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$2599",
    },
    {
      title: "Maldives",
      image: "images/destination_5.jpg",
      duration: "8 Nights / 7 days",
      hotel: "3 Star hotel",
      meals: "Breakfast and Dinner",
      price: "$7000",
    },
    {
      title: "Sri Lanka",
      image: "images/destination_6.jpg",
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
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              {/* destination-section */}
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination1} alt="" />
                  <Link for={`/`} class="desti-title">
                    Singapore
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Singapore</h3>
                    <ul class="angle list-none">
                      <li>4 Nights / 3 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$1599</p>
                    <Link for={`/`} class="btn-link">
                      Go for Singapore <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* /.destination-section */}
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              {/* destination-section */}
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination2} alt="" />
                  <Link for={`/`} class="desti-title">
                    Thailand
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Thailand</h3>
                    <ul class="angle list-none">
                      <li>5 Nights / 4 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$2599</p>
                    <Link for={`/`} class="btn-link">
                      Go for Thailand <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* /.destination-section */}
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              {/* destination-section */}
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination3} alt="" />
                  <Link for={`/`} class="desti-title">
                    Vietnam
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Vietnam</h3>
                    <ul class="angle list-none">
                      <li>6 Nights / 5 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$4599</p>
                    <Link for={`/`} class="btn-link">
                      Go for Vietnam <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* /.destination-section */}
            </div>
            {/* destination-section */}
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination4} alt="" />
                  <Link for={`/`} class="desti-title">
                    Melbourne
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Melbourne</h3>
                    <ul class="angle list-none">
                      <li>4 Nights / 3 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$2599</p>
                    <a href="#" class="btn-link">
                      Go for Melbourne <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.destination-section */}
            {/* destination-section */}
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination5} alt="" />
                  <Link for={`/`} class="desti-title">
                    Maldives
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Maldives</h3>
                    <ul class="angle list-none">
                      <li>8 Nights / 7 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$7000</p>
                    <Link for={`/`} class="btn-link">
                      Go for Maldives <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /.destination-section */}
            {/* destination-section */}
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div class="destination-block">
                <div class="desti-img">
                  <img src={Destination6} alt="" />
                  <Link for={`/`} class="desti-title">
                    Sri Lanka
                  </Link>
                  <div class="overlay"></div>
                  <div class="text">
                    <h3 class="mb20 text-white">Sri Lanka</h3>
                    <ul class="angle list-none">
                      <li>9 Nights / 8 days</li>
                      <li>3 Star hotel</li>
                      <li>Breakfast and Dinner</li>
                    </ul>
                    <p class="price">$8999</p>
                    <Link for={`/`} class="btn-link">
                      Go for Maldives <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /.destination-section */}
          </div>
        </div>
      </div>
      {/* /.destination-section */}
      <NewsLetter />
    </div>
  );
}
