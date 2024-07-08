import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfesor, updateProfesor } from '../api';

const ProfesorEditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: '',
    email: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfesor(id);
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
      await updateProfesor(id, form);
      window.location.href = `/profesores/${id}`;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Editar Profesor</h1>
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
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ProfesorEditPage;
