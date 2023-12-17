import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* footer-logo */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="ft-img">
                <img src="images/ft_logo.png" alt="" />
              </div>
            </div>
            {/* /.footer-logo */}
            {/* footer-links */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="footer-widget">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="angle list-none">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/tour">Tour</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Customer Reviews</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.footer-links */}
            {/* footer-tours */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="footer-widget">
                <h3 className="footer-title">Tour Packages</h3>
                <ul className="angle list-none">
                  <li>
                    <Link to="/international-tour">International Tour</Link>
                  </li>
                  <li>
                    <Link to="/domestic-tour">Domestic Tour</Link>
                  </li>
                  <li>
                    <Link to="/adventure-tour">Adventure Tour</Link>
                  </li>
                  <li>
                    <Link to="/business-tour">Business Tour</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.footer-Tours */}
            {/* footer-post */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="footer-widget">
                <h3 className="footer-title">Contact Info</h3>
                <div className="ft-contact-info">
                  <span className="ft-contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="ft-contact-text">
                    3927 Birch Street El Paso, TX 79930
                  </span>
                </div>
                {/* Other contact info goes here */}
                <div className="social-icon">
                  <Link to="/" className="btn-social-icon">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="/" className="btn-social-icon">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="/" className="btn-social-icon">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link to="/" className="btn-social-icon">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* /.footer-post */}
          </div>
          {/* tiny-footer */}
        </div>
        <div className="tiny-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                <p>Travel Zoak</p>
              </div>
            </div>
            {/* /. tiny-footer */}
          </div>
        </div>
      </div>
    </div>
  );
}
