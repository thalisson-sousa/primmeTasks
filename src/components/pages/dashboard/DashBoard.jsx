import { useTasksAcountAberto, useTasksAcountAndamento, useTasksAcountConcluido, useTasksAcountFechados } from '../../../hooks/useTaksAcount';
import styles from './DashBoard.module.css';

export default function DashBoard() {

    const { aberto } = useTasksAcountAberto();
    const { andamento } = useTasksAcountAndamento();
    const { concluido } = useTasksAcountConcluido();
    const { fechado } = useTasksAcountFechados();

    return (
        <div className={styles.Container}>
            <ul className={styles.Cards}>
                <li className={styles.card}>Chamados Abertos: {aberto}</li>
                <li className={styles.card}>Chamados Andamento: {andamento}</li>
                <li className={styles.card}>Chamados Concluidos: {concluido}</li>
                <li className={styles.card}>Chamados Fechados: {fechado}</li>
            </ul>
        </div>
    )
}