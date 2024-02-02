/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Meal Finder",
    description:
      "Find-Meals-For-Your-Ingredients revolutionizes your cooking experience by providing personalized recipes based on the ingredients you have, transforming your kitchen into a culinary haven.",
    url: "https://github.com/Almas456/Find-Meals-For-Your-Ingredients",
  },
  {
    title: "Dad Jokes",
    description:
      "The Dad Joke Extension is a browser extension that delivers a new dad joke every time you click its button, adding humor and levity to your browsing experience. It's a fun and easy way to inject some humor into your day, and new jokes are added regularly.",
    url: "https://github.com/Almas456/Dad-Jokes",
  },
  {
    title: "ChatGPT Clone",
    description:
      "ChatGPT Clone: Your virtual conversational companion, leveraging cutting-edge language models to provide dynamic and engaging interactions, tailored to your needs.",
    url: "https://github.com/Almas456/Chat-GPT-Clone",
  },
  {
    title: "Random Advice Generator",
    description:
      "A random advice generator is a tool that generates random pieces of advice or guidance on various topics. It can be used for personal growth, problem-solving, inspiration, and entertainment.",
    url: "https://github.com/Almas456/Random-Advice-Generator",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
