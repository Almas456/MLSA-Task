/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 // eslint-disable-next-line prettier/prettier
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/whites.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hey there! I'm Almas Shaikh, rocking it at SIES (Nerul) College of Arts, Science, and Commerce! 🚀 Thriving in hackathons is my jam, and I'm all about the coding magic with Java, React, Python, Django, HTML, CSS, and JavaScript. 🌟 Super stoked about becoming a software developer – watch out, tech world, here I come! 🚀✨";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "Software Developer",
  "SEO ",
  "Graphic design",
  "Python",
  "Azure",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Empowered by code and fueled by a passion for innovation, I navigate the digital realm, weaving solutions that not only solve problems but redefine the possibilities. With Java, React, Python, Django, HTML, CSS, and JavaScript as my brushes, and a keen sense of UI/UX as my canvas, I am on a mission to make technology not just functional, but an accessible and enriching experience for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
