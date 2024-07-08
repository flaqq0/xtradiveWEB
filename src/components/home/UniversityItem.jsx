import React from 'react';
import { Link } from 'react-router-dom';

const UniversityItem = ({ university }) => {
  return (
    <div>
      <h2>{university.nombre}</h2>
      <Link to={`/universities/${university.id}`}>Ver detalles</Link>
    </div>
  );
};

export default UniversityItem;
