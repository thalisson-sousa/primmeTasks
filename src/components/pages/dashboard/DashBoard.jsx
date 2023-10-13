import styles from './DashBoard.module.css';

export default function DashBoard() {
    return (
        <div className={styles.Container}>
            <ul className={styles.Cards}>
                <li className={styles.card}>Chamados Abertos</li>
                <li className={styles.card}>Chamados Andamento</li>
                <li className={styles.card}>Chamados Concluidos</li>
                <li className={styles.card}>Chamados Fechados</li>
            </ul>
        </div>
    )
}