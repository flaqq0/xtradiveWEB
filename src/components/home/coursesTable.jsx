import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import TableHeader from "./tableHeader";

async function getCourses() {
  try {
    const response = await fetch('http://localhost:3000/courses');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return []; 
  }
}

async function deleteUniversity(code) {
  try {
    const response = await fetch(`http://localhost:3000/courses/${code}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(`University with code ${code} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Error deleting university with code ${code}:`, error);
    return false;
  }
}

export default function CourseTable() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(data => {
      setCourses(data);
    });
  }, [courses]);

  const handleDeleteUniversity = async (code) => {
    deleteUniversity(code);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-4">
        <Button label="Editar" className="p-button-success p-mr-2" />
        <Button label="Eliminar" className="p-button-danger" onClick={() => handleDeleteUniversity(rowData.id)} />
      </div>
    );
  };

  return (
    <div className="bg-white"> 
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Course Management</p>
      </div>
      <TableHeader />
      <DataTable value={courses} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="teacherCode" header="Código del Profesor"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
