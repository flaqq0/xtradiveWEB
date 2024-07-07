import TableSection from "../components/home/TablesSections"
import SideBarHomePage from "../components/home/sideBar"
export default function HomePage(){
    return(
        <div className="min-h-screen flex bg-slate-100">
            
            <SideBarHomePage></SideBarHomePage>
            <TableSection/>
        </div>
    )
}