import axios from "axios";
import styles from "./FormCadUser.module.css";

import { useForm } from "react-hook-form";

export default function FormCadUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function createUser(data) {
    await axios.post(import.meta.env.VITE_BASE_URL + "user", data);
    location.reload();
  }

  return (
    <form
      className={styles.containerForm}
      onSubmit={handleSubmit((data) => createUser(data))}
    >
      <div className={styles.inputForm}>
        <label>
          Nome:
          <input type="text" {...register("name", { required: true })} />
        </label>
        {errors.nome && <p className={styles.erro}>Informe o seu nome</p>}
      </div>

      <div className={styles.inputForm}>
        <label>
          E-mail:
          <input type="email" {...register("email", { required: true })} />
        </label>
        {errors.email && <p className={styles.erro}>Informe seu email</p>}
      </div>

      <div className={styles.inputForm}>
        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        {errors.password && <p className={styles.erro}>Informe uma senha</p>}
      </div>

      <div className={styles.inputFormCheck}>
        <label>
          Administrador:
          <input type="checkbox" {...register("isAdmin")} />
        </label>
      </div>

      <input className={styles.btn} type="submit" />
    </form>
  );
}
