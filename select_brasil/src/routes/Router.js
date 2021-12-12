import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CoursesPage from "../pages/coursesPage/coursesPage"
import EmpreendedorismoPage from "../pages/empreendedorismoPage/empreendedorismoPage"
import FinancasPage from "../pages/financasPage/financasPage"
import GestaoEmpresarialPage from "../pages/gestaoEmpresarialPage/gestaoEmpresarialPage"
import HirePage from "../pages/hirePage/hirePage"
import HomePage from "../pages/homePage/homePage"
import RegisterCompanyPage from "../pages/registerCompanyPage/registerCompanyPage"
import SingUpPageStudant from "../pages/singUpPageStudant/singUpPageStudant"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/formacoes" element={<CoursesPage />} />
        <Route path="/formacoes/empreendedorismo" element ={<EmpreendedorismoPage />}/>
        <Route path ="/formacoes/financas"element={<FinancasPage />}/>
        <Route path ="/formacoes/gestao_empresarial"element ={<GestaoEmpresarialPage />}/>
        <Route path ="/contrate" element ={ <HirePage />} />
        <Route exact path="/" element ={<HomePage />} />
        <Route path="/cadastro/empresa"element ={<RegisterCompanyPage />}/>
        <Route path="/cadastro/estudante"component={<SingUpPageStudant />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
