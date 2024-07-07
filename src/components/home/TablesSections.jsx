// import TableHeader from "./tableHeader"
import TeacherTable from "./teachersTable";
// import ManagmentTable from "./TableManagment";
import CareerTable from "./TableManagment";
import UniversityTable from "./unversityTable";
import CoursesTable from "./coursesTable";
export default function TableSection() {
  return (
    <>
      <div className=" px-8 flex flex-col bg-slate-800 min-h-screen w-screen">
        <TeacherTable />
        { }
        <UniversityTable />
        <CoursesTable />
        <CareerTable/>
      </div>
    </>
  );
}
