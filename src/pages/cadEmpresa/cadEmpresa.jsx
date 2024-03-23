/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import styles from "./cadEmpresa.module.css";
import style from "./CadTable.module.css";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useEmpresaData } from "../../hooks/useEmpresaData";

export default function cadEmpresa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modal = document.querySelector("#modal");

  const [open, setOpen] = useState(false);

  const { data } = useEmpresaData();

  async function createUser(data) {
    await axios.post(import.meta.env.VITE_BASE_URL + "empresa", data);
    location.reload();
  }

  if (open === true) {
    modal.showModal();
  }

  function deleteButton(value) {
    axios.delete(import.meta.env.VITE_BASE_URL + 'empresa/' + value)
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
                  Nome:
                  <input
                    type="text"
                    {...register("nome", { required: true })}
                  />
                </label>
                {errors.nome && (
                  <p className={styles.erro}>Informe o nome da Empresa</p>
                )}
              </div>

              <div className={styles.inputForm}>
                <label>
                  Empresa:
                  <input
                    type="text"
                    {...register("contato", { required: true })}
                  />
                </label>
                {errors.contato && (
                  <p className={styles.erro}>Informe o contato da Empresa</p>
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
                <th>Nome</th>
                <th>Contato</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id}>
                  <td>{data.nome}</td>
                  <td>{data.contato}</td>
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
