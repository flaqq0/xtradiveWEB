import React, { useState } from 'react';

export const UniversityForm = ({ onAddUniversity }) => {
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUniversity(form);
    setForm({ nombre: '', direccion: '', telefono: '' });
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
      <button type="submit">Agregar Universidad</button>
    </form>
  );
}
