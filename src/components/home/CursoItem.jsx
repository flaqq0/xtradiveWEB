import { Link } from 'react-router-dom';
import React from 'react';
import './All.css'
export const CursoItem = () => {
  return (
    <div>
      <h2>{curso.nombre}</h2>
      <Link to={`/cursos/${curso.id}`}>Ver detalles</Link>
    </div>
  )
}