import React from "react";
import { Footer, Header, ScrollWatch } from "../components";
import "../pages/styles.scss";
import classNames from "classnames";
import { ContactFormSection } from "../components/ContactFormSection";
import { SEO } from "../components/SEO";
import { CaseStudies } from "../components/CaseStudies";

export const technologies: Record<string, { name: string; icon: string }> = {
  react: {
    name: "React",
    icon: "/images/icons/react.svg",
  },
  nodejs: {
    name: "Node.js",
    icon: "/images/icons/nodejs.svg",
  },
  reactNative: {
    name: "RNative",
    icon: "/images/icons/react.svg",
  },
  graphql: {
    name: "GraphQL",
    icon: "/images/icons/graphql.svg",
  },
  lambda: {
    name: "Lambda",
    icon: "/images/icons/lambda.svg",
  },
  mongo: {
    name: "Mongo",
    icon: "/images/icons/mongo.svg",
  },
  postgres: {
    name: "PostgreSQL",
    icon: "/images/icons/postgres.svg",
  },
  tableau: {
    name: "Tableau",
    icon: "/images/icons/tableau.svg",
  },
  solidity: {
    name: "Solidity",
    icon: "/images/icons/solidity.svg",
  },
  psql: {
    name: "PostgreSQL",
    icon: "/images/icons/postgres.svg",
  },
};

const CaseStudy = (props: any) => {
  const { pageContext } = props;

  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <section className="services inner-pages top-block">
          <div className="services__container">
            <div className="inner-pages__top-block">
              <div className="inner-pages__name inner-pages__name_ubdi">
                <img
                  className="case-study-logo"
                  src={pageContext.logo}
                  alt={pageContext.title}
                />
              </div>
              <div className="inner-pages__skills">
                {pageContext.technologies.map((key: string) => {
                  const tech = technologies[key];

                  if (!tech) {
                    throw new Error(`Unknown technology: ${key}`);
                  }

                  return (
                    <div className="inner-pages__skill" key={key}>
                      <img src={tech.icon} alt={`${tech.name} icon`} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <ScrollWatch
              as="h3"
              threshold="0.2"
              className="services__subtitle anim-upwards1"
            >
              {pageContext.headline}
            </ScrollWatch>
            {pageContext.blocks.map((block: any, index: number) => {
              return (
                <div
                  className={classNames(`services__row`, {
                    services__row_second: index % 2 === 1,
                  })}
                >
                  <div data-prlx-mouse-wrapper className="services__col-img">
                    <img
                      data-prlx-mouse
                      src={block.image}
                      className={`service-img${index % 2 === 0 ? 1 : 2}`}
                      alt="services"
                      width="425"
                    />
                  </div>

                  <div className="services__col-content">
                    <ScrollWatch
                      as="div"
                      threshold="0.2"
                      className="services__text anim-upwards1"
                    >
                      <div dangerouslySetInnerHTML={{ __html: block.text }} />
                    </ScrollWatch>
                  </div>
                </div>
              );
            })}

            {pageContext.relatedCaseStudies && (
              <ScrollWatch as="div" className="anim-upwards1">
                <CaseStudies
                  title={`Related ${pageContext.industry} case studies`}
                  ids={pageContext.relatedCaseStudies || []}
                />
              </ScrollWatch>
            )}
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};
export default CaseStudy;

export const Head = (props: any) => {
  return (
    <SEO
      title={props.pageContext.title}
      description={props.pageContext.description}
    />
  );
};
