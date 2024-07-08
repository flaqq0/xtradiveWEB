import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LoginPage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import {UniversityDetailPage} from "../pages/UniversityDetailPage";
import {UniversityEditPage} from "../pages/UniversityEditPage";
import {CarreraDetailPage} from "../pages/CarreraDetailPage";
import {CarreraEditPage} from "../pages/CarreraEditPage";
import {CursoDetailPage} from "../pages/CursoDetailPage";
import {CursoEditPage} from "../pages/CursoEditPage";
import {ProfesorDetailPage} from "../pages/ProfesorDetailPage";
import {ProfesorEditPage} from "../pages/ProfesorEditPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />

                {/* Rutas para Universidades */}
                <Route path="/universidades/:id" element={<UniversityDetailPage />} />
                <Route path="/universidades/:id/edit" element={<UniversityEditPage />} />

                {/* Rutas para Carreras */}
                <Route path="/carreras/:id" element={<CarreraDetailPage />} />
                <Route path="/carreras/:id/edit" element={<CarreraEditPage />} />

                {/* Rutas para Cursos */}
                <Route path="/cursos/:id" element={<CursoDetailPage />} />
                <Route path="/cursos/:id/edit" element={<CursoEditPage />} />

                {/* Rutas para Profesores */}
                <Route path="/profesores/:id" element={<ProfesorDetailPage />} />
                <Route path="/profesores/:id/edit" element={<ProfesorEditPage />} />
            </Routes>
        </BrowserRouter>
    );
}
