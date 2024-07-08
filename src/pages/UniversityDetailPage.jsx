import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUniversity, deleteUniversity } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const UniversityDetailPage = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUniversity(id);
        setUniversity(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteUniversity(id);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  if (!university) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{university.nombre}</h1>
      <Link to={`/universities/${id}/edit`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );

}