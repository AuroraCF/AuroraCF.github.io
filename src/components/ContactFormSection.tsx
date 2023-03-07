import classNames from "classnames";
import React from "react";
import { useForm } from "react-hook-form";
import { ScrollWatch } from "./ScrollWatch";

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

export const ContactFormSection = () => {
  return (
    <div id="contact-us" className="new-contact-us">
      <div className="new-contact-us__container">
        <div className="new-contact-us__intro">
          <h5>Ready to take your software to the next level?</h5>
          <a href="/contact" className="new-contact-us_button">
            Let's talk
          </a>
        </div>
      </div>
    </div>
  );
};

export const ContactFormSectionX = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data: any) => {
    console.log({ data });
    await handleSubscribe(data);
  };

  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us__container">
        <img
          className="contact-us__bg"
          src="/images/section-4/bg.svg"
          alt="bg"
        />

        <div className="contact-us__row">
          <div className="contact-us__column contact-us__column-text">
            <div className="contact-us__wrapper">
              <ScrollWatch
                as="div"
                threshold="0.2"
                className="contact-us__title anim-upwards1"
              >
                Contact Us
                <img
                  src="/images/section-4/contacts-white.svg"
                  alt="contact"
                  className="contact-us__title-image"
                />
                <img
                  src="/images/section-4/contacts-black.svg"
                  alt="contact"
                  className="contact-us__title-image contact-us__title-image_black"
                />
              </ScrollWatch>
              <ScrollWatch
                as="div"
                threshold="0.2"
                className="contact-us__description anim-upwards1"
              >
                Ready to take your software to the next level? Fill out our
                contact form and we will be in touch with you shortly!
              </ScrollWatch>
            </div>
          </div>

          <div className="contact-us__column">
            {formState.isSubmitSuccessful && (
              <div
                id="form-success"
                className="contact-us__form contact-us__form_success"
                style={{
                  textAlign: "center",
                  padding: "200px 0",
                }}
              >
                <img
                  alt="Checkmark"
                  src="/images/icons/circle-check-regular.svg"
                  width="80"
                  style={{ display: "inline-block" }}
                />
                <br />
                <br />
                Thank you for your inquiry! <br />
                We'll be in touch with you shortly.
              </div>
            )}
            {!formState.isSubmitSuccessful && (
              <form
                name="contact-us-form"
                id="form-default"
                className="contact-us__form contact-us__form_default"
                method="post"
              >
                <div className="contact-us__form-line">
                  <input
                    required
                    placeholder="Name *"
                    className={classNames(
                      "input",
                      formState.errors.name && "input_error"
                    )}
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="contact-us__form-line">
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="Email *"
                    className={classNames(
                      "input",
                      formState.errors.email && "input_error"
                    )}
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="contact-us__form-line">
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Phone number"
                    className={classNames(
                      "input",
                      formState.errors.phone && "input_error"
                    )}
                    {...register("phone")}
                  />
                </div>
                <div className="contact-us__form-line">
                  <textarea
                    required
                    cols={30}
                    rows={6}
                    placeholder="Your Message *"
                    className={classNames(
                      "input",
                      formState.errors.message && "input_error"
                    )}
                    {...register("message", { required: true })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="button-submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
