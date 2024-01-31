/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import styles from "./cadFilial.module.css";
import style from "./CadTable.module.css";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useFililData } from "../../../hooks/useFilialData";

export default function cadFilial() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modal = document.querySelector("#modal");

  const [open, setOpen] = useState(false);

  const { data } = useFililData();

  async function createUser(data) {
    await axios.post(import.meta.env.VITE_BASE_URL + "filial", data);
    location.reload();
  }

  if (open === true) {
    modal.showModal();
  }

  function deleteButton(value) {
    axios.delete(import.meta.env.VITE_BASE_URL + 'filial/' + value)
    location.reload();
  }

  return (
    <>
      <section>
        <header className={styles.head}>
          <button className={styles.btn} onClick={() => setOpen(true)}>
            Cadastrar
          </button>
        </header>
      </section>

      <section className={styles.Container}>
        <div>
          <dialog id="modal" className={styles.Container}>
            <form
              className={styles.containerForm}
              onSubmit={handleSubmit((data) => createUser(data))}
            >
              <div className={styles.inputForm}>
                <label>
                  SM:
                  <input
                    type="text"
                    {...register("sm", { required: true })}
                  />
                </label>
                {errors.sm && (
                  <p className={styles.erro}>Informe o nome da filial</p>
                )}
              </div>

              <div className={styles.inputForm}>
                <label>
                  Filial:
                  <input
                    type="text"
                    {...register("filial", { required: true })}
                  />
                </label>
                {errors.filial && (
                  <p className={styles.erro}>Informe numero da SM</p>
                )}
              </div>

              <input className={styles.btn} type="submit" />
            </form>
          </dialog>
        </div>
      </section>

      <section className={style.tableWrapper}>
        <div>
          <table className={style.flTable}>
            <thead>
              <tr>
                <th>SM</th>
                <th>Filial</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id}>
                  <td>{data.sm}</td>
                  <td>{data.filial}</td>
                  <td style={{maxWidth: 50}}>
                    <button className={`${styles.editButton} ${styles.btns}`}>
                      Editar
                    </button>
                    <button
                      onClick={(e) => deleteButton(e.target.value)}
                      className={`${styles.deleteButton} ${styles.btns}`}
                      value={data.id}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
