import { Link } from 'react-router-dom';

import React from 'react'

export const UniversityItem = ({ university }) => {
  return (
    <div>
      <h2>{university.nombre}</h2>
      <Link to={`/universities/${university.id}`}>Ver detalles</Link>
    </div>
  )
}