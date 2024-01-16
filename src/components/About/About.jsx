import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const {
  container,
  title,
  content,
  aboutImage,
  aboutItems,
  aboutItem,
  aboutItemText,
} = styles;

const renderAboutItem = (icon, title, description) => (
  <li className={aboutItem}>
    <img src={getImageUrl(`about/${icon}`)} alt={`${title} - ${icon}`} />
    <div className={aboutItemText}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </li>
);

export const About = () => {
  return (
    <section className={container} id="about">
      <h2 className={title}>About</h2>
      <div className={content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={aboutImage}
        />
        <ul className={aboutItems}>
          {renderAboutItem(
            "cursorIcon.png",
            "Frontend Developer",
            "I'm a frontend developer with experience..."
          )}
          {renderAboutItem(
            "serverIcon.png",
            "Backend Developer",
            "I have experience developing fast and optimized..."
          )}
          {renderAboutItem(
            "cursorIcon.png",
            "UI Designer",
            "I have designed multiple landing pages and have created..."
          )}
        </ul>
      </div>
    </section>
  );
};
