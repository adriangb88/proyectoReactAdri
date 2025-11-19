import React from "react";
import './MiLista.css';

function MiLista(props){
    return (
        <div className="container mt-3">
            {props.incidencias.map((i) => (
                <div key={i.id_incidencias} className="incidencia-item mb-4 pb-2 border-bottom">
                    <p className="incidencia-titulo"><strong>Título:</strong> {i.titulo}</p>
                    <p className="incidencia-descripcion"><strong>Descripción:</strong> {i.descripcion}</p>
                    <p className="incidencia-usuario"><strong>Usuario:</strong> {i.id_usuario}</p>
                    <p className="incidencia-urgencia"><strong>Urgencia:</strong> {i.nivel_urgencia}</p>
                    <p className="incidencia-ubicacion"><strong>Ubicación:</strong> {i.ubicacion}</p>
                </div>
            ))}
        </div>
    );
}

export default MiLista;