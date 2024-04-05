import NavBar from "../NavBar";
import styles from "./MoldScreen.module.css";

export default function MoldScreen() {
  return (
    <div className={styles.ContainerMain}>
      <div>
        <NavBar />
      </div>
      <div className={styles.body}></div>
    </div>
  );
}
