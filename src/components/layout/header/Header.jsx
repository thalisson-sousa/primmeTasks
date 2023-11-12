import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './mateusIcon.png';

export default function Header() {
    return (
        <header className={styles.containerHeader}>
            <Link to='/'>
                <img src={logo} />
            </Link>
            <div className={styles.containerInputs}>
                <input type='search' />
                <input type='submit' />
            </div>
        </header>
    );
}
