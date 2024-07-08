import React from 'react';
import {CursoItem} from './CursoItem';

export const CursoList = ({ cursos }) => {
  return (
    <div>
      {cursos.map((curso) => (
        <CursoItem key={curso.id} curso={curso} />
      ))}
    </div>
  );
}