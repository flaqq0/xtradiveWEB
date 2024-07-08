import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarrera, updateCarrera } from '../api';

const CarreraEditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCarrera(id);
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
      await updateCarrera(id, form);
      window.location.href = `/carreras/${id}`;
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Editar Carrera</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default CarreraEditPage;
