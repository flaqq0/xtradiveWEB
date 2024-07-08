import React from 'react';
import {ProfesorItem} from './ProfesorItem';
import './All.css'
export const ProfesorList = ({ profesores }) => {
  return (
    <div>
      {profesores.map((profesor) => (
        <ProfesorItem key={profesor.id} profesor={profesor} />
      ))}
    </div>
  );
}