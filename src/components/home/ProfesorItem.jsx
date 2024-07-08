import { Link } from 'react-router-dom';
import React from 'react';
import './All.css'
export const ProfesorItem = () => {
  return (
    <div>
      <h2>{profesor.nombre}</h2>
      <p>{profesor.email}</p>
      <Link to={`/profesores/${profesor.id}`}>Ver detalles</Link>
    </div>
  )
}