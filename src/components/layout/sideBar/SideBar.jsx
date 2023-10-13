import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';
import { AiOutlineDashboard } from 'react-icons/ai'
import { CiFilter } from 'react-icons/ci'

export default function SideBar() {
    return (
        <div className={styles.Container}>
            <div className={styles.newTask}>
                <Link to="/newtask">
                    Novo Chamado
                </Link>
            </div>
            <div className={styles.menu}>Menu de Navegação</div>
            <div className={styles.dashboard}>
                <AiOutlineDashboard />
                <Link to="/">
                    Dashboard
                </Link>
            </div>
            <div className={styles.dashboard}>
                <CiFilter />
                <Link to="/report">
                    Relatorio
                </Link>
            </div>
        </div>
    )
}