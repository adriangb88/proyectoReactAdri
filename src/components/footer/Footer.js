import React from "react";
import './Footer.css';

class Footer extends React.Component {
  render(){
    return (
      <div className="footer-container text-center p-3 mt-4">
        <p className="footer-texto">Copyright © 2025 Tu Nombre</p>
      </div>
    );
  }
}

export default Footer;