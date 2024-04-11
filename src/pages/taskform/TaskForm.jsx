import { useForm } from "react-hook-form";

import styles from "./TaskForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/sideBar/SideBar";

export default function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function createTaks(data) {
    axios.post(import.meta.env.VITE_BASE_URL + "tasks", data);
    navigate("/tasks");
    location.reload();
  }

  return (
    <>
      <Header />
      <section className={styles.main}>
        <SideBar />
        <div className={styles.ContainerForm}>
          <form
            className={styles.Container}
            onSubmit={handleSubmit((data) => createTaks(data))}
          >
            <div className={styles.topContainer}>
              <div className={`${styles.inputForm} ${styles.nivel}`}>
                <label>Nivel:</label>
                <select {...register("nivel")}>
                  <option value="N1">N1</option>
                  <option value="N2">N2</option>
                  <option value="N3">N3</option>
                </select>
              </div>

              <div className={`${styles.inputForm} ${styles.status}`}>
                <label>Status:</label>
                <select {...register("status")}>
                  <option>Aberto</option>
                  <option>Andamento</option>
                  <option>Concluido</option>
                  <option>Fechado</option>
                </select>
              </div>
            </div>

            <div className={`${styles.inputForm} ${styles.dual}`}>
              <div className={styles.composer}>
                <label>Protocolo:</label>
                <input {...register("protocolo")} />
              </div>

              <div className={styles.composer}>
                <label>Designacão:</label>
                <input {...register("designacao")} />
              </div>

              <div className={styles.composer}>
                <label>Previsão:</label>
                <input {...register("previsao")} />
              </div>
            </div>

            <div className={`${styles.inputForm} ${styles.dual}`}>
              <div className={styles.composer}>
                <label>Atendente:</label>
                <input {...register("atendente")} />
              </div>

              <div className={styles.composer}>
                <label>Empresa:</label>
                <input {...register("empresa", { required: true })} />
                {errors.empresa && (
                  <p className={styles.erro}>Informe a Operadora</p>
                )}
              </div>
            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
              <label>Filial:</label>
              <input {...register("filial", { required: true })} />
              {errors.filial && <p className={styles.erro}>Informe a Filial</p>}
            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
              <label>Sintomas:</label>
              <input {...register("sintomas")} />
            </div>

            <div className={`${styles.inputForm} ${styles.generic}`}>
              <label>Motivo:</label>
              <textarea rows="6" cols="50" {...register("motivo")} />
            </div>
            <input className={styles.formSubmit} type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
