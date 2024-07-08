import React from 'react';
import ProfesorItem from './ProfesorItem';

const ProfesorList = ({ profesores }) => {
  return (
    <div>
      {profesores.map((profesor) => (
        <ProfesorItem key={profesor.id} profesor={profesor} />
      ))}
    </div>
  );
};

export default ProfesorList;
