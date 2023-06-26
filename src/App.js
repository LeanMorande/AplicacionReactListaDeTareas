import './App.css';
import NotepadLogo from "../src/Images/notepad.png";
import ListaDeTareas from "./Components/ListaDeTareas";

function App() {
  // Componente funcional principal de la aplicación

  return (
    <div className="aplicacion-tareas">
      {/* Contenedor principal de la aplicación de tareas */}

      <div className='notepad-logo-contenedor'>
        {/* Contenedor del logo  */}

        <img 
          src={NotepadLogo} 
          className='notepad-logo'
          alt="Notepad Logo" 
        />
        {/* Logo notepad */}
        <h1>Mis Tareas</h1>

        <img 
          src={NotepadLogo} 
          className='notepad-logo'
          alt="Notepad Logo" 
        />
      
      </div>

      <div className='tareas-lista-principal'>
        {/* Contenedor de la lista de tareas principal */}

        

        <ListaDeTareas />
        {/* Componente ListaDeTareas que muestra la lista de tareas */}
      </div>
    </div>
  );
}

export default App;