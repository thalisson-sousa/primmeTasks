import styles from './SignUpPage.module.css';
import signUp from "../../assets/loginPictures/signup.jpg";

export default function SignUpPage() {
    return (
        <section className={styles.container}>
            <div className={styles.form}>
                <div>
                    <img src={signUp} className={styles.iconImg} width="200px" />
                </div>
                <input type="text" placeholder="User Name" />
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </div>
            <div className={styles.containerImg}></div>
        </section>
    );
}