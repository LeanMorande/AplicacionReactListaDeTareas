import React from "react";
import "../Stylesheets/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  // Componente funcional para renderizar una tarea individual

  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      {/* La clase CSS "tarea-contenedor" se asigna siempre al contenedor de la tarea.
          Si la tarea está completada, se agrega también la clase CSS "completada". */}

      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {/* El contenido de la tarea se muestra en un div con la clase CSS "tarea-texto".
            Al hacer clic en el div, se invoca la función completarTarea pasando el ID de la tarea. */}
        {texto}
      </div>

      <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
        {/* El contenedor de los iconos de la tarea se muestra en un div con la clase CSS "tarea-contenedor-iconos".
            Al hacer clic en el div, se invoca la función eliminarTarea pasando el ID de la tarea. */}
        <AiOutlineCloseCircle className="tarea-icono" />
        {/* Se muestra el icono AiOutlineCloseCircle de la librería de iconos react-icons. */}
      </div>
    </div>
  );
}

export default Tarea;