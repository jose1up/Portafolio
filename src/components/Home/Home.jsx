import React from "react";
import s from "./Home.module.css";
import { Element } from "react-scroll";
import { Avatar } from "../Avatar/Avatar";
import { Componente } from "../Componente/Componente";
import { Contact } from "../contact/Contact";
import { Headers } from "../headers/headers";
import { Proectos } from "../proyectos/Proectos";
import { Skills } from "../skills/skills";

export const Home = () => {
  return (
    <div className={s.App}>
      {/* <div className={s.Contact}>
        <Element name="Contact">
          <Contact />
        </Element>
      </div> */}
      <div className={s.Headers}>
        <Headers />
      </div>
      <div className={s.Componente}>
        <Element name="Home">
          <Componente />
        </Element>
      </div>
      <div className={s.Skills}>
        <Element name="Skills">
          <Skills />
        </Element>
      </div>
      <div className={s.Avatar}>
        <Element name="Avatar">
          <Avatar />
        </Element>
      </div>
      <div className={s.Proectos}>
        <Element name="Proyecto">
          <Proectos />
        </Element>
      </div>
      <div className={s.Contact}>
        <Element name="Contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};
