import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../Stylesheets/ListaDeTareas.css";

function ListaDeTareas() {
  // Componente funcional para la lista de tareas

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };
  // Función para agregar una nueva tarea a la lista
  // Verifica que el texto de la tarea no esté vacío ni solo contenga espacios en blanco
  // Añade la tarea al estado de tareas actualizado

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  // Función para eliminar una tarea de la lista
  // Filtra las tareas por el ID y crea un nuevo estado de tareas sin la tarea eliminada

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  // Función para marcar una tarea como completada o incompleta
  // Busca la tarea por el ID y cambia el estado de completada al contrario

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      {/* Componente TareaFormulario para agregar nuevas tareas */}
      
      <div className="tarea-lista-contenedor">
        {/* Contenedor de la lista de tareas */}
        {/* Se muestra cada tarea en el componente Tarea */}
        {/* Se pasan las props necesarias a cada tarea */}
        {/* Se utiliza el key como identificador único para cada tarea */}
        {/* Se pasan las funciones completarTarea y eliminarTarea como props */}
        {/* para permitir su invocación desde cada tarea */}
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
