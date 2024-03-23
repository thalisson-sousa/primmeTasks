import { useTasksAcountAberto, useTasksAcountAndamento, useTasksAcountConcluido, useTasksAcountFechados } from '../../hooks/useTaksAcount';
import styles from './DashBoard.module.css';

export default function DashBoard() {

    const { aberto } = useTasksAcountAberto();
    const { andamento } = useTasksAcountAndamento();
    const { concluido } = useTasksAcountConcluido();
    const { fechado } = useTasksAcountFechados();

    return (
        <div className={styles.Container}>
            <ul className={styles.Cards}>
                {
                    aberto != null ? <li className={styles.card}>Chamados Abertos: {aberto}</li>
                    : <li className={styles.card}>Chamados Abertos: 0</li>
                }
                {
                    andamento != null ? <li className={styles.card}>Chamados Andamento: {andamento}</li>
                    : <li className={styles.card}>Chamados Andamento: 0</li>
                }
                {
                    concluido != null ? <li className={styles.card}>Chamados Concluidos: {concluido}</li>
                    : <li className={styles.card}>Chamados Concluidos: 0</li>
                }
                {
                    fechado != null ? <li className={styles.card}>Chamados Fechados: {fechado}</li>
                    : <li className={styles.card}>Chamados Fechados: 0</li>
                }
            </ul>
        </div>
    )
}