import React, { useState } from "react";
import "../Stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  // Componente funcional para el formulario de tareas

  const [input, setInput] = useState(""); // Estado para almacenar el valor del input
  const [inputId, setInputId] = useState(uuidv4()); // Estado para almacenar el ID único del input

  const manejarCambio = (e) => {
    setInput(e.target.value);
    // Función para actualizar el estado del input con el valor ingresado por el usuario
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: inputId,
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
    // Invocar la función onSubmit pasando la nueva tarea como argumento

    setInput(""); // Vaciar el valor del input después de enviar el formulario

    setInputId(uuidv4()); // Generar un nuevo ID único para el siguiente input
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      {/* Formulario para agregar nuevas tareas */}

      <input
        className="tarea-input"
        type="text"
        placeholder="Agrega nueva tarea..."
        name="texto"
        id={inputId} // Asignar el ID único al input
        onChange={manejarCambio} // Asociar la función manejarCambio al evento onChange del input
        value={input} // Establecer el valor actual del input
      />

      <button className="tarea-boton">+</button>
      {/* Botón para enviar el formulario */}
    </form>
  );
}

export default TareaFormulario;