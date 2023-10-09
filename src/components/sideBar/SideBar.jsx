import styles from './SideBar.module.css';
import { AiOutlineDashboard } from 'react-icons/ai'
import { CiFilter } from 'react-icons/ci'

export default function SideBar() {
    return (
        <div className={styles.Container}>
            <div className={styles.newTask}>Novo Chamado</div>
            <div className={styles.menu}>Menu de Navegação</div>
            <div className={styles.dashboard}>
                <AiOutlineDashboard />
                Dashboard
            </div>
            <div className={styles.dashboard}>
                <CiFilter />
                Relatorio
            </div>
        </div>
    )
}