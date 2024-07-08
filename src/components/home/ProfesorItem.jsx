import React from 'react';
import { Link } from 'react-router-dom';

const ProfesorItem = ({ profesor }) => {
  return (
    <div>
      <h2>{profesor.nombre}</h2>
      <p>{profesor.email}</p>
      <Link to={`/profesores/${profesor.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProfesorItem;
