import React, { useState } from 'react';
import UniversityCard from './UniversityCard';
import CareersGrid from './CareersGrid';
import './All.css'
const UniversitiesGrid = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  if (selectedUniversity) {
    return <CareersGrid university={selectedUniversity} />;
  }

  return (
    <div className="universities-grid">
      <UniversityCard name="University 1" onClick={() => setSelectedUniversity('University 1')} />
      <UniversityCard name="University 2" onClick={() => setSelectedUniversity('University 2')} />
      {/* Agregar más universidades según sea necesario */}
    </div>
  );
};

export default UniversitiesGrid;
