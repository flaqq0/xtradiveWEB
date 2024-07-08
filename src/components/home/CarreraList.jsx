import React from 'react';
import {CarreraItem} from './CarreraItem';

const CarreraList = ({ carreras }) => {
  return (
    <div>
      {carreras.map((carrera) => (
        <CarreraItem key={carrera.id} carrera={carrera} />
      ))}
    </div>
  );
};

export default CarreraList;
