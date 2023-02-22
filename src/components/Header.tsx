import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";

export const Header = ({
  withScroll = false,
  onHomePage = false,
}: {
  withScroll?: boolean;
  onHomePage?: boolean;
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [areIndustriesExpanded, setAreIndustriesExpanded] = useState(false);

  const trackScroll = useCallback(() => {
    const updatedHasScrolled = window.pageYOffset > 0;

    setHasScrolled(updatedHasScrolled);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }

    if (withScroll) {
      if (window.pageYOffset > 0) {
        setHasScrolled(true);
      }

      function watchScroll() {
        window.addEventListener("scroll", trackScroll);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", trackScroll);
      };
    }
  }, []);

  if (!isDesktop) {
    return (
      <div
        className={classNames("header", {
          "menu-open": isExpanded,
          "_header-scroll": hasScrolled || !withScroll,
        })}
      >
        <div className="header__container">
          <div className="header__menu menu">
            <a href="/" className="header__logo">
              <img src="/images/logo-header.svg" alt="logo" />
            </a>
            <button
              type="button"
              className="menu__icon icon-menu"
              onClick={() => setIsExpanded((x) => !x)}
            >
              <span></span>
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="header__mobile-menu">
            <ul className="mobile_menu__list">
              <li>
                <a href="/#services" onClick={() => setIsExpanded(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="/#case-studies" onClick={() => setIsExpanded(false)}>
                  Case studies
                </a>
              </li>
              <li>
                <a onClick={() => setAreIndustriesExpanded((x) => !x)}>
                  Industries
                </a>
                <ul className={"menu__mobile_dropdown is-open"}>
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
                    <a href="/industry/health-and-fitness">Health & Fitness</a>
                  </li>
                </ul>
              </li>
              <li>
                {onHomePage ? (
                  <a href="/#blog" onClick={() => setIsExpanded(false)}>
                    Blog
                  </a>
                ) : (
                  <a target="_blank" href="https://blog.auroracode.io">
                    Blog
                  </a>
                )}
              </li>
              <li>
                <a href="/#contact-us" onClick={() => setIsExpanded(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <header
      className={classNames({
        header: true,
        "_header-scroll": hasScrolled || !withScroll,
      })}
    >
      <div className="header__container">
        <div className="header__menu menu">
          <a href="/" className="header__logo">
            <img src="/images/logo-header.svg" alt="logo" />
          </a>
          <button type="button" className="menu__icon icon-menu">
            <span></span>
          </button>
          <nav className="menu__body">
            <ul className="menu__list">
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#case-studies">Case studies</a>
              </li>
              <li
                onMouseEnter={() => setAreIndustriesExpanded(true)}
                onMouseLeave={() => setAreIndustriesExpanded(false)}
              >
                <a onClick={() => setIsExpanded(false)}>Industries</a>
                <ul
                  className={classNames("menu__dropdown", {
                    "is-open": areIndustriesExpanded,
                  })}
                >
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
                    <a href="/industry/health-and-fitness">Health & Fitness</a>
                  </li>
                </ul>
              </li>
              <li>
                {onHomePage ? (
                  <a href="/#blog">Blog</a>
                ) : (
                  <a target="_blank" href="https://blog.auroracode.io">
                    Blog
                  </a>
                )}
              </li>
            </ul>
          </nav>
          <a href="#contact-us" className="header__user-button">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};
