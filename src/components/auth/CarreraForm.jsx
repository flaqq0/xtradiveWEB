import React, { useState } from 'react';

const CarreraForm = ({ onAddCarrera }) => {
  const [form, setForm] = useState({
    nombre: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCarrera(form);
    setForm({ nombre: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <button type="submit">Agregar Carrera</button>
    </form>
  );
};

export default CarreraForm;
