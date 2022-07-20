import React from "react";
import logoDeSkill from "../../../icons/logoSkill.png";
import s from "./skills.module.css";

export const Skills = () => {
  return (
    <div className={s.skills}>
      <h2 className={s.h2}>Skills</h2>
      <img src={logoDeSkill} alt="logoDeSkill" className={s.logoDeSkill}/>
    </div>
  );
};
