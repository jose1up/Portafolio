import s from "./App.module.css";
import { Avatar } from "./components/Avatar/Avatar";
import { Componente } from "./components/Componente/Componente";
import { Contact } from "./components/contact/Contact";
import { Headers } from "./components/headers/headers";
import { Proectos } from "./components/proyectos/Proectos";
import { Skills } from "./components/skills/skills";
import { Element } from "react-scroll";

function App() {
  return (
    <div className={s.App}>
      <div className={s.Contact}>
        <Element name="Contact">
          <Contact />
        </Element>
      </div>
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
    </div>
  );
}

export default App;
