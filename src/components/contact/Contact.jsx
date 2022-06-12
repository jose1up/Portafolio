import React from "react";
import logoGit from "../../../icons/carbon_logo-github.png";
import logoLinkedin from "../../../icons/ci_linkedin.png";
import logoGmail from "../../../icons/logos_google-gmail.png";
import s from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={s.Contact}>
      <a href="https://github.com/jose1up">
        <img src={logoGit} alt="logoGit" />
      </a>
      <a href="https://www.linkedin.com/in/josemiguelalcaraz">
        <img src={logoLinkedin} alt="logoLinkedin" />
      </a>
      <a href="mailto:josealcaraz022@gmail.com">
        <img src={logoGmail} alt="logoGmail" />
      </a>
    </div>
  );
};



