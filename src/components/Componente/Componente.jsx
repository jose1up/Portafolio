import React from "react";
import JoseMiguelAlcaraz from "../../../icons/joseMiguel.png"
import s from "./Componente.module.css"
export const Componente = () => {
  return (
    <div>
      <img src={JoseMiguelAlcaraz} alt="JoseMiguelAlcaraz" className={s.imagen} />
    </div>
  );
};
