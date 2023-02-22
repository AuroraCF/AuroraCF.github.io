import React from "react";
import { ScrollWatch } from "./ScrollWatch";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div onClick={() => window.scrollTo(0, 0)}>
          <ScrollWatch
            as="div"
            threshold="0.2"
            className="footer-top__go-up anim-upwards1"
          ></ScrollWatch>
        </div>

        <div className="footer-top">
          <div className="footer-top__content">
            <div className="footer-top__column left">
              <img className="footer-logo" src="/images/logo.svg" alt="logo" />
              <div className="footer-top__contacts">
                <h4 className="footer-title">Address:</h4>
                <div className="footer__text">
                  1309 Coffeen Avenue, Sheridan, WY, 82801
                </div>
                <h4 className="footer-title">Contact:</h4>
                <a href="tel:2705550117">(307) 275-3623</a>
                <a href="mailto:support@auroracode.io">support@auroracode.io</a>
              </div>
            </div>
            <div className="footer-top__column right">
              <div className="footer-top__links">
                <div className="footer-top__links-column">
                  <h4 className="footer-title">Services</h4>
                  <ul>
                    <li>
                      <a href="/#kickstart">Kickstart</a>
                    </li>
                    <li>
                      <a href="/#superb">Superb</a>
                    </li>
                    <li>
                      <a href="/#elevate">Elevate</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top__links-column">
                  <h4 className="footer-title">Industries</h4>
                  <ul>
                    <li>
                      <a href="/industry/fintech">Fintech</a>
                    </li>
                    <li>
                      <a href="/industry/data-and-ai">
                        Data & AI
                      </a>
                    </li>
                    <li>
                      <a href="/industry/social-network-community">
                        Social Network
                      </a>
                    </li>
                    <li>
                      <a href="/industry/health-and-fitness">
                        Health & Fitness
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top__links-column">
                  <h4 className="footer-title">About</h4>
                  <ul>
                    <li>
                      <a href="/#services">Services</a>
                    </li>
                    <li>
                      <a href="/#case-studies">Case Studies</a>
                    </li>
                    <li>
                      <a href="/#blog">Blog</a>
                    </li>
                    <li>
                      <a href="/#contact-us">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-top__links-column">
                  <h4 className="footer-title">Follow Us</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/aurora-code-factory/"
                        target="_blank"
                      >
                        <img
                          className="logo-linkedin"
                          src="/images/icons/linkedin.svg"
                          alt="LinkedIn"
                        />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/aurora_code_io"
                        target="_blank"
                      >
                        <img
                          className="logo-twitter"
                          src="/images/icons/twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                    {/* <!-- <li>
              <a
                href="https://www.instagram.com/aurora_code_factory/"
                target="_blank"
                ><img
                  className="logo-instagram"
                  target="_blank"
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                />Instagram</a
              >
            </li> --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top__empty-column"></div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__column">
            Copyright © 2023. Aurora Code. All rights reserved.
          </div>
          <div className="footer-bottom__column">
            {/* <!-- <span><a href="">Terms & Conditions</a></span>
    <span><a href="">Privacy Policy</a></span> --> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
