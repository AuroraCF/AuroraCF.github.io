import React from "react";
import { Footer, Header, ScrollWatch } from "../components";
import "../pages/styles.scss";
import { ContactFormSection } from "../components/ContactFormSection";
import { SEO } from "../components/SEO";

const us = [
  {
    name: "Kemal Mustafić",
    text: "With a strong technical background, Kemal Mustafic is an accomplished CEO with extensive experience in business building. He has a proven track record of success and is highly respected in the industry. Kemal's passion for innovation and his deep understanding of the market make him an invaluable asset to any venture. In his free time, he enjoys staying active through sports and exploring new destinations while traveling.",
    linkedin: "https://www.linkedin.com/in/kemal-mustafic-059b45138/",
    twitter: "https://twitter.com/Kemal_Mustafic",
    image: "/images/us/kemal-mustafic.jpeg",
  },
  {
    name: "Vedad Šoše",
    text: "Vedad is a highly skilled software developer with over 10 years of experience. As the current CTO of Aurora, he thrives on building startups and enjoys brainstorming and coding to create innovative solutions. Outside of work, Vedad loves to stay active through sports and exploring new destinations while traveling.",
    linkedin: "https://www.linkedin.com/in/vedad-sose",
    twitter: "https://twitter.com/vedadsose",
    image: "/images/us/vedad-sose.jpeg",
  },
];

const AboutUs = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <section className="services inner-pages top-block">
          <div className="services__container">
            <div className="inner-pages__top-block">
              <div className="inner-pages__name">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
          <div className="aboutus__container">
            {us.map((item, index) => {
              return (
                <div className="aboutus__row">
                  <ScrollWatch
                    as="div"
                    threshold="0.2"
                    className="aboutus__img anim-upwards1"
                  >
                    <img src={item.image} alt={item.name} width="250" />
                  </ScrollWatch>

                  <div className="aboutus__col-content">
                    <ScrollWatch
                      as="h3"
                      threshold="0.2"
                      className="anim-upwards1"
                    >
                      {item.name}
                    </ScrollWatch>
                  </div>

                  <div className="aboutus__col-text">
                    <ScrollWatch
                      as="div"
                      threshold="0.2"
                      className="anim-upwards1"
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.text }} />
                    </ScrollWatch>
                  </div>

                  <ScrollWatch
                    as="div"
                    threshold="0.2"
                    className="aboutus__col-networks anim-upwards1"
                  >
                    <a href={item.linkedin} target="_blank">
                      <img src="/images/icons/linkedin.svg" alt="LinkedIn" />
                      LinkedIn
                    </a>
                    <a href={item.twitter} target="_blank">
                      <img src="/images/icons/twitter.svg" alt="Twitter" />
                      Twitter
                    </a>
                  </ScrollWatch>
                </div>
              );
            })}
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};
export default AboutUs;

export const Head = () => {
  return <SEO title={"About Us"} description={"People behind Aurora Code"} />;
};
