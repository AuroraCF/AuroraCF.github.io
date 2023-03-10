import React from "react";
import { Footer, Header, ScrollWatch } from "../components";
import "../pages/styles.scss";
import { SEO } from "../components/SEO";
import classNames from "classnames";
import { useForm } from "react-hook-form";

const handleSubscribe = (data: any) => {
  const subscribeURL =
    "https://assets.mailerlite.com/jsonp/285229/forms/76918907714143988/subscribe";

  const formData = new FormData();

  Object.keys(data).forEach((field) => {
    formData.append(`fields[${field}]`, data[field]);
  });

  return fetch(subscribeURL, {
    method: "POST",
    body: formData,
  });
};

const AboutUs = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    await handleSubscribe(data);
    reset();
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <section className="services inner-pages top-block">
          <div className="services__container">
            <div className="inner-pages__top-block">
              <div className="inner-pages__name">
                <h1>Let's talk</h1>
              </div>
            </div>
            <br />

            <div className="services__row">
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src={"/images/letstalk.svg"}
                  className={"service-img1"}
                  width="420"
                />
              </div>

              <div className="services__col-content">
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  Thank you for considering us. We understand that choosing the
                  right partner to bring your vision to life is a crucial
                  decision, and we want to make the process as easy and
                  transparent as possible.
                  <br />
                  <br />
                  That's why we offer a complimentary consultation call with our
                  experienced team. During the call, we will take the time to
                  understand your project needs, answer any questions you may
                  have, and provide you with valuable insights on how we can
                  help you achieve your goals.
                  <br />
                  <br />
                  <a
                    href="https://calendly.com/aurora-code/discovery-call"
                    className="button-submit"
                    target="_blank"
                  >
                    Book free consultations
                  </a>
                </ScrollWatch>
              </div>
            </div>
            <div className="services__row services__row_second">
              <div data-prlx-mouse-wrapper className="services__col-img">
                <img
                  data-prlx-mouse
                  src={"/images/contact.svg"}
                  className={"service-img2"}
                  width="420"
                />
              </div>
              <div className="services__col-content">
                <ScrollWatch
                  as="div"
                  threshold="0.2"
                  className="services__text anim-upwards1"
                >
                  {isSubmitSuccessful ? (
                    <div className="success-message">
                      Thank you for your message. Our team will get back to you
                      soon!
                    </div>
                  ) : (
                    <>
                      Or, send us a message and we will get back to you as soon
                      as possible:
                      <br />
                      <br />
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                          <div className="form-line">
                            <input
                              placeholder="Name *"
                              className={classNames(
                                "input",
                                errors.name && "input_error"
                              )}
                              {...register("name", { required: true })}
                            />
                            {errors.name && (
                              <span className="input-error-message">
                                Please enter your name
                              </span>
                            )}
                          </div>
                          <div className="form-line">
                            <input
                              type="email"
                              autoComplete="email"
                              placeholder="Email *"
                              className={classNames(
                                "input",
                                errors.email && "input_error"
                              )}
                              {...register("email", {
                                required: true,
                              })}
                            />
                            {errors.email && (
                              <span className="input-error-message">
                                Please enter valid email address
                              </span>
                            )}
                          </div>
                          <div className="form-line">
                            <input
                              autoComplete="off"
                              type="tel"
                              placeholder="Phone number"
                              className={classNames(
                                "input",
                                errors.phone && "input_error"
                              )}
                              {...register("phone")}
                            />
                          </div>
                          <div className="form-line">
                            <textarea
                              cols={30}
                              rows={6}
                              placeholder="Your Message *"
                              className={classNames(
                                "input",
                                errors.message && "input_error"
                              )}
                              {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && (
                              <span className="input-error-message">
                                Please enter your message
                              </span>
                            )}
                          </div>

                          <button type="submit" className="button-submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </ScrollWatch>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AboutUs;

export const Head = () => {
  return <SEO title={"Contact"} description={"Contact Aurora Code"} />;
};
