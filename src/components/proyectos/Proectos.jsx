import React from "react";
import s from "./proyectos.module.css";
import ReactPlayer from "react-player";

export const Proectos = () => {
  let primerProyecto = "https://youtu.be/uBZSd2uPU9U";
  return (
    <div>
      <h2 className={s.h2}>Project</h2>
      <div className={s.appPokemon}>
        <h3 className={s.h3}>App pokemon</h3>
        <ReactPlayer
          url={primerProyecto}
          controls={true}
          muted
          width="250px"
          height="150px"
        />
      </div>
    </div>
  );
};
