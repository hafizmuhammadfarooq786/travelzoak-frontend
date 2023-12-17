import React from "react";

import "./Home.css";
import slider3 from "../../images/slider_3.jpg";
import TourImage1 from "../../images/tour_img_1.jpg";
import TourImage2 from "../../images/tour_img_2.jpg";
import TourImage3 from "../../images/tour_img_3.jpg";
import Destination1 from "../../images/destination_1.jpg";
import Destination2 from "../../images/destination_2.jpg";
import Destination3 from "../../images/destination_3.jpg";
import Destination4 from "../../images/destination_4.jpg";
import Hotel1 from "../../images/hotel_1.png";
import AirTicket from "../../images/airplane.png";
import Car from "../../images/car.png";
import Passport from "../../images/passport.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div class="slider">
        <div class="owl-carousel owl-one owl-theme">
          <div class="item">
            <div class="slider-img">
              <img src={slider3} alt="" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div class="slider-captions">
                    <h1 class="slider-title">Get UpComing Travel Deals</h1>
                    <Link for={`/`} class="btn btn-primary">
                      View Packages
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-default enquiry-form ">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <form>
                <div class="row">
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-3 col-12">
                    <div class="form-group">
                      <label class="control-label sr-only" for="select"></label>
                      <div class="select">
                        <select id="select" name="city" class="form-control">
                          <option value="">Where you want to go</option>
                          <option value="">Singapore</option>
                          <option value="">Thailand</option>
                          <option value="">Vietnam</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-3 col-12">
                    <div class="form-group">
                      <label
                        class="control-label sr-only"
                        for="datepicker"
                      ></label>
                      <div class="input-group">
                        <input
                          id="datepicker"
                          name="datepicker"
                          type="text"
                          placeholder="Date"
                          class="form-control"
                          required
                        />
                        <span class="input-group-addon">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-3 col-12">
                    <div class="form-group">
                      <label class="control-label sr-only" for="select"></label>
                      <div class="select">
                        <select id="select" name="select" class="form-control">
                          <option value="">Number of Peoples</option>
                          <option value="">6</option>
                          <option value="">10</option>
                          <option value="">25</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-12 col-md-6 col-sm-3 col-12">
                    <button
                      type="submit"
                      name="singlebutton"
                      class="btn btn-primary btn-lg"
                    >
                      Enquiry Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="space-medium">
        <div class="container">
          <div class="row ">
            <div class="col-xl-4 col-lg-4 offset-md-1 col-md-4 col-sm-12 col-12 mb40">
              <div class="tour-img">
                <Link for={`/`} class="imghover">
                  {" "}
                  <img src={TourImage1} alt="" class="img-fluid" />
                </Link>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 offset-md-1 col-md-5 col-sm-12 col-12 mb40">
              <div class="tour-block">
                <div class="tour-content">
                  <h2 class="mb30">
                    <Link for={`/`} class="title">
                      International Tour
                    </Link>
                  </h2>
                  <p class="mb30">
                    Vestibulum nec mauris interdum facilisis nequeet convallis
                    odioses praesentet lacinia orciulla dolorerat ullamcorper
                    sitamet meuesered egestas venenatis enimusce sed ipsum
                    seddolor.
                  </p>
                  <Link for={`/`} class="btn-link">
                    Go For International Tour<i class="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-5 col-lg-5 offset-md-1 col-md-5 col-sm-12 col-12 mb40">
              <div class="tour-block">
                <div class="tour-content">
                  <h2 class="mb30">
                    <Link for={`/`} class="title">
                      Adventure Tour
                    </Link>
                  </h2>
                  <p class="mb30">
                    Donec porttitor lorem utdiam iaculis euismod congue eroset
                    lectus consectetur fermen uspendissolutpat risus utarcu
                    dapibusat conquat quam sodenean pretium a metus euauctor.
                  </p>
                  <Link for={`/`} class="btn-link">
                    Go For Adventure Tour<i class="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 offset-md-1 col-md-4 col-sm-12 col-12 mb40">
              <div class="tour-img">
                <Link for={`/`} class="imghover">
                  <img src={TourImage2} alt="" class="img-fluid" />
                </Link>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-4 col-lg-4 offset-md-1 col-md-4 col-sm-12 col-12 mb20">
              <div class="tour-img">
                <Link for={`/`} class="imghover">
                  <img src={TourImage3} alt="" class="img-fluid" />
                </Link>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 offset-md-1 col-md-5 col-sm-12 col-12 mb20">
              <div class="tour-block">
                <div class="tour-content">
                  <h2 class="mb30">
                    <Link for={`/`} class="title">
                      Domestic Tour
                    </Link>
                  </h2>
                  <p class="mb30">
                    Proin in urna hendrerit tortor dignissim auctor vitae
                    etnibstibulum venenatis lectus urnaut sodales nibh sagittis
                    eestibulum ante ipsum primisin faucibusorci luctus
                    etultrices posuere cubilia.
                  </p>
                  <Link for={`/`} class="btn-link">
                    Go For Domestic Tour<i class="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-medium">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div class="section-title">
                <h2>Top Destinations</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 nopl nopr">
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
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 nopl nopr">
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
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 nopr nopl">
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
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 nopr nopl">
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
                    <Link for={`/`} class="btn-link">
                      Go for Melbourne <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service-section */}
      <div class="space-medium service-wrapper">
        <div class="container">
          {/* service-head */}
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb60">
              <div class="">
                <h2>Our Services</h2>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 offset-md-1 col-md-8 col-sm-12 col-12 mb60">
              <div class="">
                <p class="lead">
                  Suctus felis non nibh maximus consectetuis sed nisl eniullase
                  pellentesque euismod eronon ntesque tortor molestieege.
                </p>
              </div>
            </div>
          </div>
          {/* /.service-head */}
          <div class="row">
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopl nopr">
              <div class="service-block border-bottom border-right">
                <div class="service-img">
                  <img src={Car} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">Domestic Tours</h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopr">
              <div class="service-block border-bottom border-right">
                <div class="service-img">
                  <img src={Hotel1} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">Hotel Reservation</h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopl">
              <div class="service-block border-bottom">
                <div class="service-img">
                  <img src={AirTicket} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">Air Ticketing Services</h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopr">
              <div class="service-block border-right">
                <div class="service-img">
                  <img src={Passport} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">Passport and Visa Assistance </h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopl nopr">
              <div class="service-block  border-right">
                <div class="service-img">
                  <img src={AirTicket} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">International Tours</h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
            {/* service-block */}
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 nopl">
              <div class="service-block service-right-border service-bottom-border">
                <div class="service-img">
                  <img src={Car} alt="" />
                </div>
                <div class="service-content">
                  <h3 class="service-title">Other Packages</h3>
                </div>
              </div>
            </div>
            {/* /.service-block */}
          </div>
        </div>
      </div>
    </div>
  );
}
