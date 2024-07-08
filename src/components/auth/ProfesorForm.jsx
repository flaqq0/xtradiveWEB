import React, { useState } from 'react';

const ProfesorForm = ({ onAddProfesor }) => {
  const [form, setForm] = useState({
    nombre: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProfesor(form);
    setForm({ nombre: '', email: '' });
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
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Agregar Profesor</button>
    </form>
  );
};

export default ProfesorForm;
