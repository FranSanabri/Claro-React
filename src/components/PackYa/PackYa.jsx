import React from 'react';
import './PackYa.css'; // Asegúrate de importar tu archivo de estilos para este componente

const PackYa = () => {
  return (
    <div className="packya-container">
      <div className="logo-container">
        <img
          src="https://simple.claro.com.uy/inicio/assets/img/icono-home-256.png" // Agrega la ruta de tu logo
          alt="PackYa Logo"
          className="packya-logo"
        />
      </div>
      <div className="input-container">
        <div className="input-label">Ingresa tu número de línea y te enviamos un SMS con un código de verificación</div>
        <div className="input-wrapper">
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/351222-icone-de-de-telefone-celular-gr%C3%A1tis-vetor.jpg" // Agrega la ruta de la imagen del celular
            alt="Celular"
            className="input-icon"
          />
          <input
            type="text"
            className="input-field"
            placeholder="EJ: 1123456789"
          />
        </div>
        <div className="input-note">Código de área + tu número sin el 15</div>
        <button className="continue-button">Continuar</button>
      </div>
    </div>
  );
};

export default PackYa;
