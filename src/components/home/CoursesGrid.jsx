import React, { useState } from 'react';
import {CourseCard} from './CourseCard';
import {ProfessorsGrid} from './ProfessorsGrid';

const CoursesGrid = ({ career }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (selectedCourse) {
    return <ProfessorsGrid course={selectedCourse} />;
  }

  return (
    <div className="courses-grid">
      <h2>{career}</h2>
      <CourseCard name="Course 1" onClick={() => setSelectedCourse('Course 1')} />
      <CourseCard name="Course 2" onClick={() => setSelectedCourse('Course 2')} />
      {/* Agregar más cursos según sea necesario */}
    </div>
  );
};

export default CoursesGrid;
