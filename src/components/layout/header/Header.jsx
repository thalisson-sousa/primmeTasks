import styles from './Header.module.css';
import logo from './mateusIcon.png';

export default function Header() {
    return (
        <header className={styles.containerHeader}>
            <img src={logo} />
            <div className={styles.containerInputs}>
                <input type='search' />
                <input type='submit' />
            </div>
        </header>
    );
}
