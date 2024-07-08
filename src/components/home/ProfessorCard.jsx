import React from 'react';
import './All.css'
const ProfessorCard = ({ name }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <button>Edit</button>
    </div>
  );
};

export default ProfessorCard;
