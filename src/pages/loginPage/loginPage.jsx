import styles from './loginPage.module.css';
import loginIcon from "../../assets/loginPictures/loginIcon.jpg";
import { Link } from 'react-router-dom';

export default function loginPage() {
    return (
        <section className={styles.container}>
            <div className={styles.form}>
                <div>
                    <img src={loginIcon} className={styles.iconImg} width="200px" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <div className={styles.check}>
                    <p>Remenber Me</p>
                    <input type="checkbox" />
                </div>
                <button type="submit">Sign In</button>
                <div className={styles.account}>
                    <p></p>
                    <Link to="/register">Create Account</Link>
                </div>
            </div>
            <div className={styles.containerImg}></div>
        </section>
    );
}