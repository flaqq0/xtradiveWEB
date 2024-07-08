import React, { useState } from 'react';
export const CursoForm = ({ onAddCurso }) => {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCurso(form);
    setForm({ nombre: '', descripcion: '' });
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
      <input
        type="text"
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <button type="submit">Agregar Curso</button>
    </form>
  );
}
