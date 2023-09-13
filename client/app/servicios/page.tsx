import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg">

    <div className="p-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 border-accent checked:border-accent checked:bg-accent" readOnly checked />
        <span>Desarrollo de páginas web</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 border-accent checked:border-accent checked:bg-accent" readOnly checked />
        <span>Desarrollo de aplicaciones web</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 border-accent checked:border-accent checked:bg-accent" readOnly checked />
        <span>Proveedor de clusters para ecommerce (prestashop, magento, etc.)</span>
      </label>

      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 border-accent checked:border-accent checked:bg-accent" readOnly checked />
        <span>Asesoría en general</span>
      </label>
    </div>

    </div>
    </div>
    
  );
}
