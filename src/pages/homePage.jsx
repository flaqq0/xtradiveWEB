import React, { useState, useEffect } from 'react';
import { getAllUniversities, createUniversity, getAllCarreras, createCarrera, getAllCursos, createCurso, getAllProfesores, createProfesor } from '../services/api';
import {UniversityList} from '../components/home/UniversityList';
import {UniversityForm} from '../components/auth/UniversityForm';
import {CarreraList} from '../components/home/CarreraList';
import {CarreraForm} from '../components/auth/CarreraForm';
import {CursoList} from '../components/home/CursoList';
import {CursoForm} from '../components/auth/CursoForm';
import {ProfesorList} from '../components/home/ProfesorList';
import {ProfesorForm} from '../components/auth/ProfesorForm';

export const HomePage = () => {
  const [universities, setUniversities] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const universitiesData = await getAllUniversities();
        const carrerasData = await getAllCarreras();
        const cursosData = await getAllCursos();
        const profesoresData = await getAllProfesores();
        setUniversities(universitiesData);
        setCarreras(carrerasData);
        setCursos(cursosData);
        setProfesores(profesoresData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleAddUniversity = async (newUniversity) => {
    try {
      const createdUniversity = await createUniversity(newUniversity);
      setUniversities([...universities, createdUniversity]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddCarrera = async (newCarrera) => {
    try {
      const createdCarrera = await createCarrera(newCarrera);
      setCarreras([...carreras, createdCarrera]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddCurso = async (newCurso) => {
    try {
      const createdCurso = await createCurso(newCurso);
      setCursos([...cursos, createdCurso]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddProfesor = async (newProfesor) => {
    try {
      const createdProfesor = await createProfesor(newProfesor);
      setProfesores([...profesores, createdProfesor]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Universidades</h1>
      {error && <p>{error}</p>}
      <UniversityForm onAddUniversity={handleAddUniversity} />
      <UniversityList universities={universities} />
      
      <h1>Carreras</h1>
      <CarreraForm onAddCarrera={handleAddCarrera} />
      <CarreraList carreras={carreras} />
      
      <h1>Cursos</h1>
      <CursoForm onAddCurso={handleAddCurso} />
      <CursoList cursos={cursos} />

      <h1>Profesores</h1>
      <ProfesorForm onAddProfesor={handleAddProfesor} />
      <ProfesorList profesores={profesores} />
    </div>
  );

}