import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';
import { AiOutlineDashboard, AiOutlineUserAdd } from 'react-icons/ai';
import { CiFilter } from 'react-icons/ci';
import { LiaStoreAltSolid } from 'react-icons/lia';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { BiTask } from 'react-icons/bi';

export default function SideBar() {
    return (
        <div className={styles.Container}>
            <div className={styles.newTask}>
                <Link to="/newtask">
                    Novo Chamado
                </Link>
            </div>
            <div className={styles.menu}>Menu de Navegação</div>
            <div className={styles.sideButton}>
                <AiOutlineDashboard />
                <Link to="/">
                    Dashboard
                </Link>
            </div>
            <div className={styles.sideButton}>
                <BiTask />
                <Link to="/tasks">
                    Chamados
                </Link>
            </div>
            <div className={styles.sideButton}>
                <CiFilter />
                <Link to="/report">
                    Relatorio
                </Link>
            </div>
            <div className={styles.sideButton}>
                <details className={styles.containerAcordeon}>
                    <summary>Cadastro</summary>
                    <p>
                        <AiOutlineUserAdd />
                        <Link to="/cadastro/usuario">
                            Usuario
                        </Link>
                    </p>
                    <p>
                        <LiaStoreAltSolid />
                        <Link to="/cadastro/filial">
                            Filial
                        </Link>
                    </p>
                    <p>
                        <HiOutlineBuildingOffice />
                        <Link to="/cadastro/empresa">
                            Empresa
                        </Link>
                    </p>
                </details>
            </div>
        </div>
    )
}