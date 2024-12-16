import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Generador de Excusas</h1>

      <form className="form">
        <h2>Obtener excusas</h2>
        <label>
          Cantidad:
          <input />
        </label>
        <label>
          Categoría:
          <input />
        </label>
        <button>Enviar</button>
      </form>

      <div className="random-excuse">
        <h2>Excusa random al inicio:</h2>
        <p></p>
      </div>

    </div>
  );
}

export default App;
