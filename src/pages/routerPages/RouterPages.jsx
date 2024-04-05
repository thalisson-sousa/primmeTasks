import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../dashboard/DashBoard";
import ReportPage from "../report/ReportPage";
import GetTasks from "../tasks/GetTasks";
import TaskForm from "../taskform/TaskForm";
import CadUsuario from "../cadUsuario/CadUsuario";
import CadFilial from "../cadFilial/cadFilial";
import CadEmpresa from "../cadEmpresa/cadEmpresa";

import styles from "./RouterPage.module.css";

export default function RouterPages() {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <div></div>
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/tasks" element={<GetTasks />} />
            <Route path="/newtask" element={<TaskForm />} />
            <Route path="/cadastro/usuario" element={<CadUsuario />} />
            <Route path="/cadastro/filial" element={<CadFilial />} />
            <Route path="/cadastro/empresa" element={<CadEmpresa />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
