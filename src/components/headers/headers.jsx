import React from "react";
import s from "./headers.module.css";
import { Skills } from "../skills/skills";
import { Proectos } from "../proyectos/Proectos";
import { Link } from "react-scroll";

export const Headers = () => {
  return (
    <div>
      <header className={s.Headers}>
        <Link smooth={true} to="Home">
          <button className={s.btnHome}>Home</button>
        </Link>
        <Link smooth={true} to="Skills">
          <button className={s.btnHome}>Skills</button>
        </Link>
        <Link smooth={true} to="Proyecto">
          <button className={s.btnHome}>Project</button>
        </Link>
        <Link smooth={true} to="Contact">
          <button className={s.btnHome}>Contact</button>
        </Link>
      </header>
    </div>
  );
};
