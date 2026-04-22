import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Usuario/Register";
import TelaCursos from "../pages/Cursos/Cursos";
import CursoClicado from "../pages/CursoClicado/CursoClicado";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/inicio"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cursos"
          element={
            <ProtectedRoute>
              <TelaCursos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/curso/:id"
          element={
            <ProtectedRoute>
              <CursoClicado />
            </ProtectedRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  )
}