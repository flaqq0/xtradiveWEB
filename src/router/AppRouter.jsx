import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/DataPage"
// import HomePage from "../pages/HomePage";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/home" element={<HomePage/>}></Route>
                {/* <Route path="/home" element={<HomePage/>}></Route> */}
            </Routes> 
        </BrowserRouter>
    )
}