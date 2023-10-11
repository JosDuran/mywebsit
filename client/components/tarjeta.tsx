import React from 'react';
import Link from 'next/link';

function Tarjeta() {
  return (


    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg"> 
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src="docker3.png" alt="Docker"/></figure>
          <div className="card-body">
            <h2 className="card-title">Actualizado a la version 24.0.5</h2>
            <p>Click aqui para desplegar una aplicacion en Docker</p>
            <div className="card-actions justify-center">
              <button className="btn btn-neutral">&lt;</button>
              <button className="btn btn-neutral">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Tarjeta;

