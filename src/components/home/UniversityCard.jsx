import React from 'react';

const UniversityCard = ({ name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <p>{name}</p>
      <button>Edit</button>
    </div>
  );
};

export default UniversityCard;
