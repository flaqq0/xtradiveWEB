import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProfesor, deleteProfesor } from '../api';

const ProfesorDetailPage = () => {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfesor(id);
        setProfesor(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProfesor(id);
      window.location.href = '/profesores';
    } catch (err) {
      setError(err.message);
    }
  };

  if (!profesor) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{profesor.nombre}</h1>
      <Link to={`/profesores/${id}/edit`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default ProfesorDetailPage;
