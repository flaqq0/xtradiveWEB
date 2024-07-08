import React from 'react';
import {UniversityItem} from './UniversityItem';

export const UniversityList = ({ universities }) => {
  return (
    <div>
      {universities.map((university) => (
        <UniversityItem key={university.id} university={university} />
      ))}
    </div>
  );
}
