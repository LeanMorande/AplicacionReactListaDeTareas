import './App.css';
import freeCodeCamplogo from "../src/Images/fcc-logo.jpg";
import ListaDeTareas from "./Components/ListaDeTareas";

function App() {
  // Componente funcional principal de la aplicación

  return (
    <div className="aplicacion-tareas">
      {/* Contenedor principal de la aplicación de tareas */}

      <div className='free-code-camp-logo-contenedor'>
        {/* Contenedor del logo de freeCodeCamp */}

        <img 
          src={freeCodeCamplogo} 
          className='free-code-camp-logo'
          alt="FreeCodeCamp Logo" 
        />
        {/* Logo de freeCodeCamp */}
      </div>

      <div className='tareas-lista-principal'>
        {/* Contenedor de la lista de tareas principal */}

        <h1>Mis Tareas</h1>
        {/* Título de la lista de tareas */}

        <ListaDeTareas />
        {/* Componente ListaDeTareas que muestra la lista de tareas */}
      </div>
    </div>
  );
}

export default App;