import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarrera, deleteCarrera } from '../services/api';

export const CarreraDetailPage = () => {
  const { id } = useParams();
  const [carrera, setCarrera] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarrera(id);
        setCarrera(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCarrera(id);
      window.location.href = '/carreras';
    } catch (err) {
      setError(err.message);
    }
  };

  if (!carrera) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{carrera.nombre}</h1>
      <Link to={`/carreras/${id}/edit`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};
