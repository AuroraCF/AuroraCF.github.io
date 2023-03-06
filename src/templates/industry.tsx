import React from "react";
import { Footer, Header, ScrollWatch } from "../components";
import "../pages/styles.scss";
import classNames from "classnames";
import { ContactFormSection } from "../components/ContactFormSection";
import { SEO } from "../components/SEO";
import { CaseStudies } from "../components/CaseStudies";


const Industry = (props: any) => {
  const { pageContext } = props;

  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <section className="services inner-pages top-block">
          <div className="services__container">
            <div className="inner-pages__top-block">
              <div className="inner-pages__name">
                <h1>{pageContext.title}</h1>
              </div>
            </div>
            <br />
            <br />
            <div className={classNames(`services__row`)}>
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src={pageContext.image}
                  className={`service-img1`}
                  alt="services"
                  width="425"
                />
              </div>

              <div className="services__col-content">
                <ScrollWatch
                  as="h3"
                  threshold="0.2"
                  className="services__subtitle anim-upwards1"
                >
                  {pageContext.headline}
                </ScrollWatch>
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: pageContext.content }}
                  />
                </ScrollWatch>
              </div>
            </div>
            <ScrollWatch as="div" className="anim-upwards1">
              <CaseStudies
                title={`Work we’ve done in the ${pageContext.title} Industry`}
                ids={pageContext.caseStudies || []}
              />
            </ScrollWatch>
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};
export default Industry;

export const Head = (props: any) => {
  return (
    <SEO
      title={props.pageContext.title}
      description={props.pageContext.description}
    />
  );
};
