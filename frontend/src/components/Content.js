import React, { useState, useEffect } from 'react';

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer la solicitud al backend para obtener los datos.
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-semibold">Mi Aplicación</h1>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Contenido</h2>
        <ul className="list-disc list-inside">
          {data.map((item) => (
            <li key={item.id} className="mb-2">
              {item.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Content;
