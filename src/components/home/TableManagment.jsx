import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import TableHeader from "./tableHeader";

async function getCareers() {
  try {
    const response = await fetch('http://localhost:3000/careers');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

async function deleteCareer(code) {
  try {
    const response = await fetch(`http://localhost:3000/careers/${code}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return true;
  } catch (error) {
    return false;
  }
}

export default function CareerTable() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getCareers().then(data => {
      setCareers(data);
    });
  }, [careers]);

  const handleDeleteCareer = async (code) => {
    deleteCareer(code);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-4">
        <Button label="Editar" className="p-button-success p-mr-2" />
        <Button label="Eliminar" className="p-button-danger" onClick={() => handleDeleteCareer(rowData.id)} />
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Gestión de Carreras</p>
      </div>
      <TableHeader />
      <DataTable value={careers} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="department" header="Departamento"></Column>
        <Column field="duration" header="Duración (años)"></Column>
        <Column field="credits" header="Créditos"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
