import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const BACKEND_URL = 'http://54.204.123.91:8080/';

// Decodificar el rol del token JWT
export const getRoleBasedOnToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const decodedToken = jwtDecode(token);
  return decodedToken.role;
}

// Iniciar sesión y obtener token
export const fetchLogin = async (body) => {
  try {
    const response = await axios.post(`${BACKEND_URL}auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Crear una universidad
export const createUniversity = async (universidad) => {
  try {
    const response = await axios.post(`${BACKEND_URL}universidad`, universidad, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener todas las universidades
export const getAllUniversities = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}universidad/all`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener información de una universidad por ID
export const getUniversity = async (universidadId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}universidad/${universidadId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Editar una universidad
export const editUniversity = async (universidadId, universidadUpdatedDTO) => {
  try {
    const response = await axios.put(`${BACKEND_URL}universidad/${universidadId}`, universidadUpdatedDTO, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Eliminar una universidad
export const deleteUniversity = async (universidadId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}universidad/${universidadId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener carreras de una universidad
export const getCarrerasByUniversity = async (universidadId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}universidad/${universidadId}/carreras`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Crear una carrera
export const createCarrera = async (carrera) => {
  try {
    const response = await axios.post(`${BACKEND_URL}carreras`, carrera, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener una carrera por ID
export const getCarrera = async (carreraId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}carreras/${carreraId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Editar una carrera
export const editCarrera = async (carreraId, carreraUpdatedDTO) => {
  try {
    const response = await axios.put(`${BACKEND_URL}carreras/${carreraId}`, carreraUpdatedDTO, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Eliminar una carrera
export const deleteCarrera = async (carreraId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}carreras/${carreraId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener cursos de una carrera
export const getCursosByCarrera = async (carreraId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}carreras/${carreraId}/curso`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Crear un curso
export const createCurso = async (curso) => {
  try {
    const response = await axios.post(`${BACKEND_URL}cursos`, curso, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Obtener un curso por ID
export const getCurso = async (cursoId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}cursos/${cursoId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Editar un curso
export const editCurso = async (cursoId, cursoUpdatedDTO) => {
  try {
    const response = await axios.put(`${BACKEND_URL}cursos/${cursoId}`, cursoUpdatedDTO, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Eliminar un curso
export const deleteCurso = async (cursoId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}cursos/${cursoId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Agregar carrera a una universidad
export const addCarreraToUniversity = async (universidadId, carreraId) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}universidad/${universidadId}/carreras/${carreraId}`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Remover carrera de una universidad
export const removeCarreraFromUniversity = async (universidadId, carreraId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}universidad/${universidadId}/carreras/${carreraId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Agregar profesor a un curso
export const addProfesorToCurso = async (cursoId, profesorId) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}cursos/${cursoId}/profesores/${profesorId}`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Remover profesor de un curso
export const removeProfesorFromCurso = async (cursoId, profesorId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}cursos/${cursoId}/profesores/${profesorId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
export const getAllProfesores = async () => {
  const response = await axios.get(`${BACKEND_URL}profesor`);
  return response.data;
};

export const getProfesor = async (id) => {
  const response = await axios.get(`${BACKEND_URL}profesor/${id}`);
  return response.data;
};

export const createProfesor = async (profesor) => {
  const response = await axios.post(`${BACKEND_URL}profesor`, profesor);
  return response.data;
};

export const updateProfesor = async (id, profesor) => {
  const response = await axios.put(`${BACKEND_URL}profesor/${id}`, profesor);
  return response.data;
};

export const deleteProfesor = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}profesor/${id}`);
  return response.data;
};

export const getAllCarreras = async () => {
  const response = await axios.get(`${BACKEND_URL}carrera`);
  return response.data;
};


export const updateCarrera = async (id, carrera) => {
  const response = await axios.put(`${BACKEND_URL}carrera/${id}`, carrera);
  return response.data;
};

export const getAllCursos = async () => {
  const response = await axios.get(`${BACKEND_URL}cursos/all`);
  return response.data;
};


export const updateCurso = async (id, curso) => {
  const response = await axios.put(`${BACKEND_URL}cursos/${id}`, curso);
  return response.data;
};
