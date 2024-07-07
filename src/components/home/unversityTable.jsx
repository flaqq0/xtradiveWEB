import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import TableHeader from "./tableHeader";

async function getUniversities() {
  try {
    const response = await fetch('http://localhost:3000/universities');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log('Universities:', data);
    return data;
  } catch (error) {
    // console.error('Error fetching universities:', error);
    return []; 
  }
}

async function deleteUniversity(id) {
  try {
    const response = await fetch(`http://localhost:3000/universities/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log(`university with ID ${id} deleted successfully`);
    return true;
  } catch (error) {
    // console.error(`Error deleting university with ID ${id}:`, error);
    return false;
  }
}

export default function UniversityTable() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    getUniversities().then(data => {
      setUniversities(data);
    });
  }, [universities]);

  const _deleteUniversity = (code) => {
    deleteUniversity(code);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-4">
        <Button label="Editar" className="p-button-success p-mr-2" />
        <Button label="Eliminar" className="p-button-danger" onClick={() => _deleteUniversity(rowData.id)} />
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Gestión de Universidades</p>
      </div>
      <TableHeader />
      <DataTable value={universities} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="category" header="Categoría"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="users" header="Usuarios"></Column>
        <Column field="posts" header="Posts"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
