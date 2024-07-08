import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUniversity, editUniversity } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const UniversityEditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    telefono: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUniversity(id);
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
      await editUniversity(id, form);
      nagivate( `/universidad/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Editar Universidad</h1>
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
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
          placeholder="Dirección"
        />
        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );

}