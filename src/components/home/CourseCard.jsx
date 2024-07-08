import React from 'react';
import './All.css'
const CourseCard = ({ name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <p>{name}</p>
      <button>Edit</button>
    </div>
  );
};

export default CourseCard;
