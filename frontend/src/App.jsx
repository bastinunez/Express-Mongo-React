import React, { useEffect, useState } from 'react';
import './App.css'


function App() {

  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    async function fetchMensajes() {
      try {
        // Realiza la solicitud al backend para obtener los mensajes
        const response = await fetch('http://localhost:4000/mensajes');
        if (!response.ok) {
          throw new Error('No se pudieron obtener los mensajes del servidor');
        }

        // Parsea la respuesta como JSON
        const data = await response.json();
        console.log(data)

        // Actualiza el estado con los mensajes obtenidos
        setMensajes(data);
      } catch (error) {
        console.error('Error al obtener mensajes:', error.message);
      }
    }

    fetchMensajes();
  }, []);

  return (
    <div>
      <h1>Mensajes desde MongoDB:</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {mensajes.map((dato, index) => (
            <tr key={index}>
              <td>{dato.nombre}</td>
              <td>{dato.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
