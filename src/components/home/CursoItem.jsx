import { Link } from 'react-router-dom';

export const CursoItem = () => {
  return (
    <div>
      <h2>{curso.nombre}</h2>
      <Link to={`/cursos/${curso.id}`}>Ver detalles</Link>
    </div>
  )
}