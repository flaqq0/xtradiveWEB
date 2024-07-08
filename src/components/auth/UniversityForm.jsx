import React, { useState } from 'react';

const UniversityForm = ({ onAddUniversity }) => {
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
      <button type="submit">Agregar Universidad</button>
    </form>
  );
};

export default UniversityForm;
