import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TelaCadastroUsuario from "../pages/Usuario/CadastroDeUsuario";
import Home from "../pages/Home/Home";

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/cadUser" element={<TelaCadastroUsuario/>}/>
      </Routes>
    </BrowserRouter>
  )
}