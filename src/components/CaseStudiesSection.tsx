import React, { useRef } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCaseStudies } from "../hooks/useCaseStudies";
import { technologies } from "../templates/caseStudy";
import { ScrollWatch } from "./ScrollWatch";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CaseStudiesSection = ({
  showOnlyIds,
}: {
  showOnlyIds?: string[];
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const caseStudies = useCaseStudies();

  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    if (showOnlyIds) {
      return showOnlyIds.includes(caseStudy.caseStudyId);
    }
    return true;
  });

  return (
    <section id="case-studies" className="case-studies">
      <div className="case-studies__container">
        <ScrollWatch
          as="h2"
          threshold="0.2"
          className="case-studies__title anim-upwards1"
        >
          Case Studies
        </ScrollWatch>

        <ScrollWatch
          as="div"
          threshold="0.2"
          className="case-studies__description anim-upwards1"
        >
          A showcase of some of the projects we've delivered for our clients
        </ScrollWatch>

        <div className="case-studies__cards">
          <div
            ref={navigationPrevRef}
            className="case-studies__cards__arrow case-studies__cards__arrow-left"
          />
          <div
            ref={navigationNextRef}
            className="case-studies__cards__arrow case-studies__cards__arrow-right"
          />
          <Swiper
            loop
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                swiper.params.navigation !== true
              ) {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
          >
            {filteredCaseStudies.map((caseStudy) => (
              <SwiperSlide key={caseStudy.caseStudyId}>
                <div className="case-studies__card card">
                  <a href={caseStudy.path} className="card__image">
                    <img src={caseStudy.logo} alt={caseStudy.productName} />
                  </a>
                  <h4 className="card__title">
                    <span>
                      {caseStudy.productName} - {caseStudy.headline}
                    </span>
                  </h4>
                  <div className="card__text">
                    {caseStudy.productDescription}
                  </div>
                  <div className="card__skills">
                    {caseStudy.technologies.slice(0, 5).map((key) => {
                      const tech = technologies[key];

                      if (!tech) {
                        throw new Error(`Unknown technology: ${key}`);
                      }

                      return (
                        <div className="card__skill" key={key}>
                          <div className="card__skill-img">
                            <img src={tech.icon} alt={tech.name} />
                          </div>
                          <div className="card__skill-text">{tech.name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <a href={caseStudy.path} className="card__bottom">
                    <span>learn more</span>
                    <div className="card__link-button"></div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
