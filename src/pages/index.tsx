import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header, Footer, Hero, ScrollWatch, BlogSection } from "../components";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ContactFormSection } from "../components/ContactFormSection";
import { SEO } from "../components/SEO";

import "./styles.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="wrapper">
      <Header withScroll onHomePage />

      <main className="page">
        <Hero />

        <ScrollWatch threshold="0.5" as="div" className="unlock__string">
          <img src="images/section-1/string.svg" alt="string" />
        </ScrollWatch>
        <section id="services" className="services">
          <div className="services__container">
            <ScrollWatch
              as="h2"
              threshold="0.2"
              className="services__title anim-upwards1"
            >
              Our Services
            </ScrollWatch>

            <ScrollWatch
              as="div"
              threshold="0.2"
              className="services__description anim-upwards1"
            >
              Providing personalized solutions that meet everyone's individual
              needs
            </ScrollWatch>

            <div id="kickstart" className="services__row">
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src="images/section-2/01.png"
                  className="service-img1"
                  alt="services"
                  width="424"
                />
              </div>

              <div className="services__col-content">
                <ScrollWatch
                  as="h3"
                  threshold="0.2"
                  className="services__subtitle anim-upwards1"
                >
                  Kickstart
                </ScrollWatch>
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  With Kickstart, founders can bring their innovative ideas to
                  market faster. Our team specializes in prototyping, user
                  feedback, concept validation, and market-driven product
                  development.
                </ScrollWatch>
                <ul className="services__list">
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-01.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Rapid prototyping and concept validation
                    </div>
                  </ScrollWatch>
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-02.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Achieving ideal product-market fit
                    </div>
                  </ScrollWatch>
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-03.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Ideal for raising initial capital
                    </div>
                  </ScrollWatch>
                </ul>
              </div>
            </div>

            <div id="superb" className="services__row services__row_second">
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src="images/section-2/02.png"
                  className="service-img2"
                  alt="services"
                  width="483"
                />
              </div>

              <div className="services__col-content">
                <ScrollWatch
                  as="h3"
                  threshold="0.2"
                  className="services__subtitle anim-upwards1"
                >
                  Superb
                </ScrollWatch>
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  With funding in hand, take your product to the next level with
                  Superb. Our team has the expertise to deliver high-quality
                  products on a global scale.
                </ScrollWatch>
                <ul className="services__list">
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-04.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      <div data-spollers className="spollers">
                        <div className="spollers__item">
                          <button
                            type="button"
                            data-spoller
                            className="spollers__title"
                          >
                            <span>High-quality product building</span>
                          </button>
                          <div className="spollers__body">
                            <ul className="spollers__list">
                              <li className="spollers__list-item">
                                Web applications
                              </li>
                              <li className="spollers__list-item">
                                Mobile applications
                              </li>
                              <li className="spollers__list-item">
                                Product management
                              </li>
                              <li className="spollers__list-item">
                                Infrastructure
                              </li>
                              <li className="spollers__list-item">QA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollWatch>
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-05.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Delivering robust and well-tested software solutions
                    </div>
                  </ScrollWatch>
                </ul>
              </div>
            </div>

            <div id="elevate" className="services__row">
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src="images/section-2/03.png"
                  className="service-img3"
                  alt="services"
                  width="410"
                />
              </div>

              <div className="services__col-content">
                <ScrollWatch
                  as="h3"
                  threshold="0.2"
                  className="services__subtitle anim-upwards1"
                >
                  Elevate
                </ScrollWatch>
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  Elevate your established product and team with our help. Our
                  expertise in team-building, problem analysis, and technical
                  debt reduction will help you reach new heights.
                </ScrollWatch>
                <ul className="services__list">
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-06.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Maximizing the potential of your team
                    </div>
                  </ScrollWatch>
                  <ScrollWatch
                    as="li"
                    threshold="0.2"
                    className="services__item anim-upwards1"
                  >
                    <img
                      className="services__item-img"
                      src="images/icons/our-services-07.svg"
                      alt="service"
                    />
                    <div className="services__item-text">
                      Grow established companies sustainably
                    </div>
                  </ScrollWatch>
                </ul>
              </div>
            </div>

            <a href="#contact-us">
              <ScrollWatch
                as="div"
                threshold="0.2"
                className="button anim-upwards1"
              >
                <span>Learn more</span>
              </ScrollWatch>
            </a>
          </div>
        </section>

        <CaseStudiesSection />

        <BlogSection />

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Unleash Your Business Potential" />
);
