import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCurso, updateCurso } from '../api';

const CursoEditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: '',
    descripcion: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurso(id);
        setForm(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCurso(id, form);
      window.location.href = `/cursos/${id}`;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Editar Curso</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default CursoEditPage;
