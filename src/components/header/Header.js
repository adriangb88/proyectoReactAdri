import React from "react";
import Logo from '../../img/iesn1.png';
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <div className="header-container text-center p-3">
        <img src={Logo} alt="Logo IES" width="100px" className="header-logo"/>
        <h3 className="header-titulo">Bienvenido a la página de incidencias</h3>
      </div>
    );
  }
}

export default Header;