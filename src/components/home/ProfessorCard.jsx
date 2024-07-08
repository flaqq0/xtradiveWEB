import React from 'react';

const ProfessorCard = ({ name }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <button>Edit</button>
    </div>
  );
};

export default ProfessorCard;
