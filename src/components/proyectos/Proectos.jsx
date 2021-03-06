import React from "react";
import s from "./proyectos.module.css";
import ReactPlayer from "react-player";
import bookflix from "../../../icons/bookflix 1.png";
import Todo from "../../../icons/todo.png";
import AppPokemon from "../../../icons/AppPokemonReact.png"

export const Proectos = () => {
  let urlBookflix = "https://booksflix.vercel.app/";
  let primerProyecto = "https://youtu.be/uBZSd2uPU9U";
  let ToDo = "https://todo-drab-five.vercel.app/";
  let AppPokemonReact = "https://www.youtube.com/watch?v=Za_VcAojAvU";
  return (
    <div className={s.container}>
      <h2 className={s.h2}>Project</h2 >
      <div className={s.contenedorProyecto}>
       <div className={s.appPokemon}> 
          <h3 className={s.h3}>App pokemon</h3>
          <ReactPlayer
            url={primerProyecto}
            controls={true}
            muted
            width="250px"
            height="150px"
            className={s.React}
          />
        </div>
        <div className={s.bookflix}>
          <h3 className={s.h3}>Bookflix</h3>
          <a href={urlBookflix}>
            <img src={bookflix} alt="bookflix" width="250PX" height="150px" />
          </a>
        </div>
      </div>
      <div className={s.contenedorProyecto2}>
      <div className={s.ToDo}>
        <h3 className={s.h3}>ToDo</h3>
        <a href={ToDo}>
          <img src={Todo} alt="Todo" width="250PX" height="150px" />
        </a>
      </div>
      <div className={s.AppPokemonReact}>
        <h3 className={s.h3}>AppPokemon React Native</h3>
        <ReactPlayer
            url={AppPokemonReact}
            controls={true}
            muted
            width="250px"
            height="150px"
            className={s.React}
          />
        
      </div>
      </div>
    </div>
  );
};
