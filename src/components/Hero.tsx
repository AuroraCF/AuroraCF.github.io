import React from "react";

export const Hero = () => {
  return (
    <section id="clients" className="unlock top-block">
      <div className="unlock__container">
        <div className="unlock__row">
          <div className="unlock__col-img">
            <div className="image-wrapper">
              <img src="images/section-1/chart.svg" alt="chart" />
              <div className="loc-1">
                <div className="loc-1-1"></div>
                <img
                  src="images/section-1/col-1.png"
                  className="col-1"
                  alt="column"
                />
              </div>

              <div className="loc-2">
                <div className="loc-2-2"></div>
                <img
                  src="images/section-1/col-2.png"
                  className="col-2"
                  alt="column"
                />
              </div>

              <div className="loc-3">
                <div className="loc-3-3"></div>
                <img
                  src="images/section-1/col-3.png"
                  className="col-3"
                  alt="column"
                />
              </div>

              <div className="loc-4">
                <div className="loc-4-4"></div>
                <img
                  src="images/section-1/col-1.png"
                  className="col-4"
                  alt="column"
                />
              </div>

              <div className="loc-5">
                <div className="loc-5-5"></div>
                <img
                  src="images/section-1/col-2.png"
                  className="col-5"
                  alt="column"
                />
              </div>

              <div className="loc-6">
                <div className="loc-6-6"></div>
                <img
                  src="images/section-1/col-3.png"
                  className="col-6"
                  alt="column"
                />
              </div>
            </div>
          </div>
          <div className="unlock__col-content">
            <div className="anim-wrapper1">
              <h1 className="unlock__title">
                Unleash Your
                <span>
                  Business
                  <img src="images/section-1/spacex.png" alt="Rocket" />
                </span>
                Potential
              </h1>
            </div>

            <div className="unlock__text anim-2">
              Our tailored software solutions can help you bring your business
              to the <b>next level</b>
            </div>
            <a href="#contact-us" className="button">
              <span>Let’s Talk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
