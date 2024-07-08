import React, { useState } from 'react';
import {CareerCard} from './CareerCard';
import {CoursesGrid} from './CoursesGrid';
import './All.css'

const CareersGrid = ({ university }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);

  if (selectedCareer) {
    return <CoursesGrid career={selectedCareer} />;
  }

  return (
    <div className="careers-grid">
      <h2>{university}</h2>
      <CareerCard name="Career 1" onClick={() => setSelectedCareer('Career 1')} />
      <CareerCard name="Career 2" onClick={() => setSelectedCareer('Career 2')} />
      {/* Agregar más carreras según sea necesario */}
    </div>
  );
};

export default CareersGrid;
