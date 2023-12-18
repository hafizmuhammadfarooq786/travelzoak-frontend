import React from "react";

import NewLetter from "../../../images/newsletter_wrapper.jpg";

export default function () {
  return (
    <div>
      <div
        class="newsletter-wrapper newsletter-overlay"
        style={{ background: `url(${NewLetter}) no-repeat` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7 offset-md-5 col-md-6 col-sm-12 col-12">
              <div class="newsletter-block">
                <h1 class="newsletter-title">Join The Newsletter</h1>
                <p class="mb30">
                  Subscribe the newsletter and get update for discounts on
                  tours.
                </p>
                <form>
                  <div class="input-group add-on">
                    <input
                      class="form-control"
                      placeholder="email address here"
                      type="text"
                    />
                    <div class="input-group-btn">
                      <button
                        class="btn btn-primary newsletter-btn"
                        type="submit"
                      >
                        subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
