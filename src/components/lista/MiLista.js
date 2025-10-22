import React from "react";

class MiLista extends React.Component {
    state={incidendias: [{id_incidencias: 1,
                    id_usuario: "e71788670n",
                    titulo:"Proyecto averiado en el aula 2",
                    descripcion: "Proyecto averiado en el aula 2",
                    categoria: "Hardware",
                    nivel_urgencia:"Media",
                    fecha_registro: "2025-20-10",
                    estado: "Abierta",
                    ubicacion: "B205"
                  },
                    {id_incidencias: 2,
                                    id_usuario: "e71788671n",
                                    titulo:"Ordenador no enciende",
                                    descripcion: "Ordenador no enciende",
                                    categoria: "Hardware",
                                    nivel_urgencia:"Alta",
                                    fecha_registro: "2025-20-10",
                                    estado: "Abierta",
                                    ubicacion: "B205"
                    },
                     {id_incidencias: 3,
                                    id_usuario: "e71788672n",
                                    titulo:"Ratón no funciona",
                                    descripcion: "Ratón no funciona",
                                    categoria: "Hardware",
                                    nivel_urgencia:"Alta",
                                    fecha_registro: "2025-20-10",
                                    estado: "Abierta",
                                    ubicacion: "B205"
                    },
                     {id_incidencias: 4,
                                    id_usuario: "e71788673n",
                                    titulo:"Wifi no disponible",
                                    descripcion: "Wifi no disponible",
                                    categoria: "Hardware",
                                    nivel_urgencia:"Alta",
                                    fecha_registro: "2025-20-10",
                                    estado: "Abierta",
                                    ubicacion: "B205"
                    },
                     {id_incidencias: 5,
                                    id_usuario: "e71788674n",
                                    titulo:"Monitor no enciende",
                                    descripcion: "Monitor no enciende",
                                    categoria: "Hardware",
                                    nivel_urgencia:"Alta",
                                    fecha_registro: "2025-20-10",
                                    estado: "Abierta",
                                    ubicacion: "B205"
                    }
                  ]}

  render(){
  return (
    <div className="Lista">
       <ul>
        {
          this.state.incidendias.map((i)=>(
          <li>
            <strong>id_incidencias: </strong>{i.id_incidencias}<br></br>
            <strong>titulo: </strong>{i.titulo}<br></br>
            <strong>descripcion: </strong>{i.descripcion}<br></br>
            <strong>id_usuario: </strong>{i.id_usuario}<br></br>
            <strong>ubicacion: </strong>{i.ubicacion}<br></br><br></br>
          </li>))
        }
       </ul>
    </div>
  );
  }
}

export default MiLista;