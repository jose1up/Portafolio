import React from "react";
import s from "./headers.module.css";
import { Link } from "react-scroll";
import CV from "../../../icons/JoseMiguelAlcarazDesarrollador.pdf";
import iconDownload from "../../../icons/Vector.png";
import { MenuHamburgesa } from "../MenuHamburgesa/MenuHamburgesa";

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
        <button className={s.btn}>
         <img src={iconDownload} alt="downloand" className={s.iconDownload} /><a href={CV} className={s.aBtn}> CV </a>
        </button>
      </header>
      <MenuHamburgesa/>
    </div>
  );
};
