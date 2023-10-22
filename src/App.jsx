import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from './App.module.css';
import NavBar from "./components/layout/NavBar";

import DashBoard from "./components/pages/dashboard/DashBoard";
import ReportPage from "./components/pages/report/ReportPage";
import TaskForm from "./components/pages/taskform/TaskForm";
import CadUsuario from "./components/pages/cadUsuario/CadUsuario";
import GetTasks from "./components/pages/tasks/GetTasks";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <div>
          <NavBar />
        </div>
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/tasks" element={<GetTasks />} />
            <Route path="/newtask" element={<TaskForm />} />
            <Route path="/cadastro/usuario" element={<CadUsuario />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
