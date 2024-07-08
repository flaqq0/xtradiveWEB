import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from '../pages/HomePage';
import {UniversityDetailPage} from '../components/UniversityDetailPage';
import {UniversityEditPage} from '../components/UniversityEditPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/universities/:id" element={<UniversityDetailPage />} />
        <Route path="/universities/:id/edit" element={<UniversityEditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
