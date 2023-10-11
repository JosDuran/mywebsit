'use client';
import React, { useState } from 'react';

const cardData = [
  { title: 'Docker', content: 'Contenido de la Tarjeta 1', imagen: 'docker.png', texto: 'Actualizado a la version 24.0.5' },
  { title: 'Linux', content: 'Contenido de la Tarjeta 2', imagen: 'linux.png', texto: 'Utilizamos linux para garantizar la estabilidad de su aplicacion'},
  { title: 'React', content: 'Contenido de la Tarjeta 3', imagen: 'react.png', texto: 'Construimos las mas modernas interfaces graficas' },
];

const CardCarousel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    if (currentCardIndex < cardData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const currentCard = cardData[currentCardIndex];

  return (

   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg"> 

         <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={currentCard.imagen} alt="Imagen no encontrada"/></figure>
            <div className="card-body">
               <h5 className="card-title">{currentCard.title}</h5>
               <p className="card-text">{currentCard.texto}</p>
            </div>
         </div>
         <div className="card-footer flex justify-between">
            <button className="btn btn-primary" onClick={handlePrevClick}>Anterior</button>
            <button className="btn btn-primary" onClick={handleNextClick}>Siguiente</button>
         </div>
      </div>

   </div>

  );
};

export default CardCarousel;
