import React from 'react';
import './All.css'
import ProfessorCard from './ProfessorCard';

const ProfessorsGrid = ({ course }) => {
  return (
    <div className="professors-grid">
      <h2>{course}</h2>
      <ProfessorCard name="Professor 1" />
      <ProfessorCard name="Professor 2" />
      {/* Agregar más profesores según sea necesario */}
    </div>
  );
};

export default ProfessorsGrid;
