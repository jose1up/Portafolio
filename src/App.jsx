import s from "./App.module.css";
import { Avatar } from "./components/Avatar/Avatar";
import { Componente } from "./components/Componente/Componente";
import { Contact } from "./components/contact/Contact";
import { Headers } from "./components/headers/headers";
import { Proectos } from "./components/proyectos/Proectos";
import { Skills } from "./components/skills/skills";

function App() {
  return (

    <div className={s.App}>
      <div className={s.Contact}>
        <Contact />
      </div>
      <div className={s.Headers}>
        <Headers />
      </div>
      <div className={s.Componente}>
        <Componente />
      </div>
      <div className={s.Skills}>
        <Skills />
      </div>
      <div className={s.Avatar}>
        <Avatar />
      </div>
      <div className={s.Proectos}>
        <Proectos />
      </div>
    </div>
  );
}

export default App;
