import React from "react";
import s from "./headers.module.css";
import { Link } from "react-router-dom";
import { Skills } from "../skills/skills";
import { Proectos } from "../proyectos/Proectos";

export const Headers = () => {
  return (
    <div>
      <header className={s.Headers}>
        <button className={s.btnHome}>Home</button>
        <a href={<Skills />}>Skills</a>
        <a href={<Proectos/>}>Projects</a>
        <a href="">Contact</a>
      </header>
    </div>
  );
};
