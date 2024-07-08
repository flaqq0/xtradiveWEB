import React from 'react';
import { Link } from 'react-router-dom';

const CarreraItem = ({ carrera }) => {
  return (
    <div>
      <h2>{carrera.nombre}</h2>
      <Link to={`/carreras/${carrera.id}`}>Ver detalles</Link>
    </div>
  );
};

export default CarreraItem;
