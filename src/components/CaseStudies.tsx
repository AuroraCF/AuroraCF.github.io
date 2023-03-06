import React from "react";

import { useCaseStudies } from "../hooks/useCaseStudies";
import "../pages/styles.scss";

export const CaseStudies = ({ title, ids }: { title: string; ids: string[] }) => {
  const baseStudies = useCaseStudies();

  const studies = ids.map((id) => {
    const caseStudy = baseStudies.find((cs) => cs.caseStudyId === id);

    if (!caseStudy) {
      throw new Error(`Case study with id ${id} not found`);
    }
    return caseStudy;
  });

  return (
    <section className="industry-case-studies">
      <h3>{title}</h3>
      <div className="industry-case-studies__list">
        {studies.map((study) => (
          <a
            href={study.path}
            className="industry-case-studies__case-study"
            key={study.caseStudyId}
          >
            <div className="industry-case-studies__case-study__logo">
              <img src={study.logo} alt={study.productName} />
            </div>
            <div className="industry-case-studies__case-study__content">
              <div className="industry-case-studies__case-study__content__title">
                <h4>{study.productName}</h4>
                <div className="card__link-button"></div>
              </div>
              <p>{study.productDescription}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};