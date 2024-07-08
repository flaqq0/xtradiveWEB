import { Link } from 'react-router-dom';
import React from 'react';
import './All.css'

export const CarreraItem = () => {
  return (
    <div>
      <h2>{carrera.nombre}</h2>
      <Link to={`/carreras/${carrera.id}`}>Ver detalles</Link>
    </div>
  )
}