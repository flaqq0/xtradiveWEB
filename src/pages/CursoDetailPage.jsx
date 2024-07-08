import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCurso, deleteCurso } from '../services/api';

export const CursoDetailPage = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurso(id);
        setCurso(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCurso(id);
      window.location.href = '/cursos';
    } catch (err) {
      setError(err.message);
    }
  };

  if (!curso) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{curso.nombre}</h1>
      <p>{curso.descripcion}</p>
      <Link to={`/cursos/${id}/edit`}>Editar</Link>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}
