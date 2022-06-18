import React from "react";
import s from "./proyectos.module.css";
import ReactPlayer from "react-player";
import bookflix from "../../../icons/bookflix 1.png";
import Todo from "../../../icons/todo.png";

export const Proectos = () => {
  let urlBookflix = "https://booksflix.vercel.app/";
  let primerProyecto = "https://youtu.be/uBZSd2uPU9U";
  let ToDo = "https://todo-drab-five.vercel.app/";
  return (
    <>
      <h2 className={s.h2}>Project</h2>
      <div className={s.contenedorProyecto}>
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
        <div className={s.bookflix}>
          <h3 className={s.h3}>Bookflix</h3>
          <a href={urlBookflix}>
            <img src={bookflix} alt="bookflix" width="250PX" height="150px" />
          </a>
        </div>
      </div>
      <div className={s.ToDo}>
        <h3 className={s.h3}>ToDo</h3>
        <a href={ToDo}>
          <img src={Todo} alt="Todo" width="250PX" height="150px" />
        </a>
      </div>
    </>
  );
};
