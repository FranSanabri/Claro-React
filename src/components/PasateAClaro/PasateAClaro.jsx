import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './PasateAClaro.css'; // Asegúrate de importar tu archivo de estilos

const PasateAClaro = () => {

   // Define un estado para controlar qué preguntas están abiertas
   const [respuestasAbiertas, setRespuestasAbiertas] = useState([]);

   const toggleRespuesta = (index) => {
    if (respuestasAbiertas.includes(index)) {
      setRespuestasAbiertas(respuestasAbiertas.filter((item) => item !== index));
    } else {
      setRespuestasAbiertas([...respuestasAbiertas, index]);
    }
  };
 
   // Define tus preguntas y respuestas aquí
   const preguntasFrecuentes = [
     {
       pregunta: '¿Que es la Portabilidad Numerica?',
       respuesta: 'La portabilidad numerica es la posibilidad de camibar de empresa de telofonia movial sin perder tu nu numero.',
     },
     {
       pregunta: 'Pregunta 2',
       respuesta: 'Respuesta a la pregunta 2.',
     },
     {
       pregunta: 'Pregunta 3',
       respuesta: 'Respuesta a la pregunta 3.',
     },
     {
       pregunta: 'Pregunta 4',
       respuesta: 'Respuesta a la pregunta 4.',
     },
   ];

   const reviews = [
    {
      nombre: 'Juan Pérez',
      ubicacion: 'La Plata, Buenos Aires',
      comentario: 'Excelente servicio, estoy muy contento con Claro.',
      valoracion: 5, // Valoración del 1 al 5
    },
    {
      nombre: 'María Rodríguez',
      ubicacion: 'San Rafael, Mendoza',
      comentario: 'Pagaba mas en Movistar.',
      valoracion: 4,
    },
    {
      nombre: 'Martin Pachecho',
      ubicacion: 'Moron, Buenos Aires',
      comentario: 'Los reclamos no me los toman.',
      valoracion: 2,
    },
    {
      nombre: 'Blas M. Andrade',
      ubicacion: 'Mercedes, Buenos Aires',
      comentario: 'Buena atención al cliente.',
      valoracion: 3,
    },
    // Agrega más comentarios según sea necesario
  ];
  
  
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h2 className="banner-title">Portabilidad</h2>
          <h2 className="banner-subtitle">Claro</h2>
        </div>
        <p className="banner-info">Te damos desde 30% OFF x 12 meses y otros beneficios</p>
      </div>

      <div className="plan-control-container">
        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>

        {/* Repite estas cajas según sea necesario */}
        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>

        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>

        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>

        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>

        <div className="plan-control-box">
          <h3 className="plan-title">PLAN CONTROL</h3>
          <p className="plan-info">1 GIGA</p>
          <hr className="plan-divider" />
          <p className="plan-price">$XX.XX/mes</p>
          <p className="plan-features">Claro Drive incluido</p>
          <hr className="plan-divider" />
          <p className="plan-description">Te invitamos 1 mes de Prime Video 
          <br />
          <br />Roaming de datos incluido en Chile y 
          <br />Uruguay + Packs Roaming
          <br />
          <br /> Te invitamos 2 meses de HBO </p>
          <hr className="plan-divider" />
          <button className="plan-button">QUIERO QUE ME LLAMEN</button>
        </div>
      </div>
      <div className="banner-box" style={{ backgroundColor: "#444444", color: "#ffffff" }}>
  <h2 style={{ fontSize: "28px" }}>OTRAS FORMAS DE CAMBIAR A CLARO</h2>
  <div className="other-options">
    <div className="clickable-box">
      <p style={{ fontSize: "16px" }}>Acercándote a una sucursal cercana a vos</p>
    </div>
    <div className="clickable-box">
      <p style={{ fontSize: "16px" }}>Llamando al 0800-123-25276 todos los días de 9 a 21 hs.</p>
    </div>
  </div>
</div>
<div className="preguntas-frecuentes">
      <p style={{ fontSize: "24px", textAlign: "center" }}>Preguntas frecuentes sobre la portabilidad numérica</p>
      {/* Mapea las preguntas y respuestas y crea un acordeón */}
      {preguntasFrecuentes.map((item, index) => (
        <div key={index} className="pregunta">
          <div className="pregunta-header" onClick={() => toggleRespuesta(index)}>
            <p style={{ fontSize: "20px" }}>{item.pregunta}</p>
            {/* Icono de flecha abajo/arriba según si está abierta o no */}
            {respuestasAbiertas.includes(index) ? "▲" : "▼"}
          </div>
          {/* Mostrar la respuesta si la pregunta está abierta */}
          <div className={`pregunta-respuesta ${respuestasAbiertas.includes(index) ? 'abierta' : ''}`}>
            <p>{item.respuesta}</p>
          </div>
        </div>
      ))}
  </div>
  <div className="reviews-section">
        <h2 style={{ fontSize: "28px", textAlign: "center" }}>Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="rating">
                {Array.from({ length: review.valoracion }).map((_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} style={{ color: "#FFD700" }} />
                ))}
              </div>
              <p className="review-name">{review.nombre}</p>
              <p className="review-location">{review.ubicacion}</p>
              <p className="review-comment">{review.comentario}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PasateAClaro;
