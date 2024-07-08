import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UniversityDetailPage } from './pages/UniversityDetailPage';
import { UniversityEditPage } from './pages/UniversityEditPage';
import { CarreraDetailPage } from './pages/CarreraDetailPage';
import { CarreraEditPage } from './pages/CarreraEditPage';
import { CursoDetailPage } from './pages/CursoDetailPage';
import { CursoEditPage } from './pages/CursoEditPage';
import { ProfesorDetailPage } from './pages/ProfesorDetailPage';
import { ProfesorEditPage } from './pages/ProfesorEditPage';
import { LoginPage } from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Rutas para Universidades */}
        <Route path="/universities/:id" element={<UniversityDetailPage />} />
        <Route path="/universities/:id/edit" element={<UniversityEditPage />} />

        {/* Rutas para Carreras */}
        <Route path="/carreras/:id" element={<CarreraDetailPage />} />
        <Route path="/carreras/:id/edit" element={<CarreraEditPage />} />

        {/* Rutas para Cursos */}
        <Route path="/cursos/:id" element={<CursoDetailPage />} />
        <Route path="/cursos/:id/edit" element={<CursoEditPage />} />

        {/* Rutas para Profesores */}
        <Route path="/profesores/:id" element={<ProfesorDetailPage />} />
        <Route path="/profesores/:id/edit" element={<ProfesorEditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
