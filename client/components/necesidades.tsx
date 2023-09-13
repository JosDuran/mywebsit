import React from 'react';
import Link from 'next/link';

function Necesidades() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src='/chica.jpg' alt="Avatar" />
            </div>
          </div>
          <div className="chat-bubble">Hola, ¿me podrías desarrollar una página web?</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="chino.png" alt="Avatar" />
            </div>
          </div>
          <div className="chat-bubble">Buenas tardes, ¿podría ud realizar un aplicativo web en python y alojarlo en un subdominio de su propio servidor?</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="rubia.png" alt="Avatar" />
            </div>
          </div>
          <div className="chat-bubble">¿Podría ud proporcionarme un cluster con Prestashop corriendo en su subdominio?</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="joscurri.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="chat-bubble chat-bubble-accent">Señores, todo lo que solicitan es posible y lo podemos realizar, 
                                                      por favor darle click en :-)  <a href = "/contacto">contacto</a></div>
        </div>



      </div>
    </div>
  );
}

export default Necesidades;
