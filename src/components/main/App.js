import MiLista from '../lista/MiLista';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import React, { useState } from 'react';
import Form from './Form';
import './App.css';
import Fondo from '../../img/R.jpg';

function App() {
  const [incidencias, setIncidencias] = useState([
    {
      id_incidencias: 1,
      id_usuario: "adriangb88",
      titulo: "Proyecto averia",
      descripcion: "Proyecto averiado en el aula 2",
      categoria: "Hardware",
      nivel_urgencia: "Media",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "B205"
    },
    {
      id_incidencias: 2,
      id_usuario: "pepe123",
      titulo: "Ordenador no enciende",
      descripcion: "Ordenador no enciende",
      categoria: "Hardware",
      nivel_urgencia: "Baja",
      fecha_registro: "2025-10-20",
      estado: "Abierto",
      ubicacion: "A201"
    }
  ]);

  const agregarIncidencia = (titulo, usuario, descripcion, categoria, urgencia, ubicacion) => {
    const fecha = new Date();
    const nueva = {
      id_incidencias: incidencias.length + 1,
      id_usuario: usuario,
      titulo: titulo,
      descripcion: descripcion,
      categoria: categoria,
      nivel_urgencia: urgencia,
      fecha_registro: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`,
      estado: "Abierta",
      ubicacion: ubicacion
    };
    setIncidencias([...incidencias, nueva]);
  };

  return (
    <>
      <Header/>
      <h2 className="titulo-app mb-4 text-center mt-4">Mi aplicación</h2>
      
      <div className="container-fluid mt-4 row" style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "cover",
       


      }}>
        <aside className="col-md-6">
          <MiLista incidencias={incidencias}/>
        </aside>
        <main className="col-md-6">
          <Form agregarIncidencia={agregarIncidencia}/>
        </main>
      </div>

      <Footer/>
    </>
  );
}

export default App;