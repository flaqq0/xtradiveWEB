import React from 'react';
import { Link } from 'react-router-dom';

const CursoItem = ({ curso }) => {
  return (
    <div>
      <h2>{curso.nombre}</h2>
      <Link to={`/cursos/${curso.id}`}>Ver detalles</Link>
    </div>
  );
};

export default CursoItem;
