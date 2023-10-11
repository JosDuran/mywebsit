import React from 'react';
import Link from 'next/link';

function NavJos() {
  const linkClasses = 'hover:bg-accent hover:text-black';

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">JoinToCloud</a>
      </div>
      <div className="flex flex-wrap">
        <ul className="menu menu-horizontal px-1">
          <li><a className={linkClasses} href="/">Inicio</a></li>
          <li><a className={linkClasses} href="/about">Acerca de..</a></li>
          <li><a className={linkClasses} href="/servicios">Servicios</a></li>
          <li><a className={linkClasses} href="/tecnologias">Tecnologias</a></li>
          <li><a className={linkClasses} href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavJos;