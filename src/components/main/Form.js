import React from "react";
import './Form.css';

function Form(props) {
    const envioFormulario = (e) => {
        e.preventDefault();
        const f = e.target;
        props.agregarIncidencia(
            f.titulo.value, 
            f.usuario.value, 
            f.descripcion.value, 
            f.categoria.value, 
            f.nivel.value, 
            f.ubicacion.value
        );
        f.reset();
    };

    return (
        <div className="formulario-container card p-4">
            <h3 className="formulario-titulo card-title mb-4 text-center">Registrar incidencia</h3>
            <form onSubmit={envioFormulario}>
                <div className="mb-3">
                    <label className="form-label formulario-label">Título Incidencia</label>
                    <input className="form-control" type="text" name="titulo" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label formulario-label">Usuario</label>
                    <input className="form-control" type="text" name="usuario" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label formulario-label">Descripción</label>
                    <textarea className="form-control" name="descripcion" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label formulario-label">Categoría</label>
                    <select className="form-control" name="categoria">
                        <option>Seleccionar...</option>
                        <option>Hardware</option>
                        <option>Software</option>
                        <option>Red</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label formulario-label">Nivel de urgencia</label>
                    <select className="form-control" name="nivel">
                        <option>Seleccionar...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label formulario-label">Ubicación</label>
                    <input className="form-control" type="text" name="ubicacion"/>
                </div>
                <div className="d-grid mx-auto">
                    <button type="submit" className="btn formulario-boton">Registrar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;