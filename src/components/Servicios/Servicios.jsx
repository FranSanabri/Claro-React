import React from 'react';
import './Servicios.css'; // Asegúrate de importar tus estilos

const Servicios = () => {
  return (
    <div className="servicios-container">
      {/* Banner de video */}
      <video
        src="https://videos.ctfassets.net/ugxciox4nyye/63nDGGKNS1ASOu51BnCDmH/130a4f6fd16626407eda2ab264653cc2/LIBRO_CLICK_1440X542__1_.mp4"
        autoPlay
        loop
        muted
        className="servicios-banner"
      />

      <h2 className="servicios-title">Nuestros Servicios</h2>
      <div className="servicio">
        <h3 className="servicio-title">Servicio 1</h3>
        <p className="servicio-description">
          Descripción del Servicio 1.
        </p>
        <button className="servicio-button">Ver más</button>
      </div>
      <div className="servicio">
        <h3 className="servicio-title">Servicio 2</h3>
        <p className="servicio-description">
          Descripción del Servicio 2.
        </p>
        <button className="servicio-button">Ver más</button>
      </div>
      <div className="servicio">
        <h3 className="servicio-title">Servicio 3</h3>
        <p className="servicio-description">
          Descripción del Servicio 3.
        </p>
        <button className="servicio-button">Ver más</button>
      </div>
      {/* Agrega más servicios según sea necesario */}
    </div>
  );
};

export default Servicios;
