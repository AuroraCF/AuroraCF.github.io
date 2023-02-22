import React from "react";
import { useArticles } from "../hooks/useArticles";
import { ScrollWatch } from "./ScrollWatch";

export const BlogSection = () => {
  const blogPosts = useArticles();

  return (
    <section id="blog" className="blog">
      <div className="blog__container">
        <ScrollWatch
          as="div"
          threshold="0.5"
          className="blog__row anim-upwards1"
        >
          <div className="blog__col-text">
            <h2 className="blog__title">From the Blog</h2>
            <div className="blog__description">
              Catch up on the team's latest musings in our blog
            </div>
          </div>
          <div className="blog__col-btn">
            <a
              href="https://blog.auroracode.io"
              target="_blank"
              className="button"
            >
              <span>Read All</span>
            </a>
          </div>
        </ScrollWatch>

        <div className="blog__cards cards">
          {blogPosts.slice(0, 3).map((post) => {
            return (
              <div className="blog__card card" key={post.id}>
                <a href={post.link} target="_blank" className="card__image">
                  <img src={post.thumbnail} alt={post.title} />
                </a>
                <h4 className="card__title">{post.title}</h4>
                <div className="card__text">{post.description}</div>
                <a href={post.link} target="_blank" className="card__bottom">
                  <span>learn more</span>
                  <div className="card__link-button"></div>
                </a>
              </div>
            );
          })}

          {/* <div className="blog__card card">
            <a
              href="https://blog.auroracode.io/no-code-waitlist-for-your-next-big-idea-and-why-its-important-311e645b96df"
              target="_blank"
              className="card__image"
            >
              <img
                src="https://miro.medium.com/max/1400/1*y7PWBHhxMbGqI5ZoxG0DEg.webp"
                alt="image"
              />
            </a>
            <h4 className="card__title">
              No-code waitlist for your next big idea, and why it’s important
            </h4>
            <div className="card__text">
              A guide on creating a waitlist, promoting it, collecting &
              managing emails & validating product idea.
            </div>
            <a
              href="https://blog.auroracode.io/no-code-waitlist-for-your-next-big-idea-and-why-its-important-311e645b96df"
              target="_blank"
              className="card__bottom"
            >
              <span>learn more</span>
              <div className="card__link-button"></div>
            </a>
          </div>

          <div className="blog__card card">
            <a
              href="https://blog.auroracode.io/web-development-trends-startups-should-follow-in-2023-937f8896572b"
              target="_blank"
              className="card__image"
            >
              <img src="images/blog/web-trends.png" alt="image" />
            </a>
            <h4 className="card__title">
              Web Development Trends Startups Should Follow in 2023
            </h4>
            <div className="card__text">
              2023 web development trends for startups: Shine the spotlight on
              the latest industry trends!
            </div>
            <a
              href="https://blog.auroracode.io/web-development-trends-startups-should-follow-in-2023-937f8896572b"
              className="card__bottom"
              target="_blank"
            >
              <span>learn more</span>
              <div className="card__link-button"></div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
