import { useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";


import { useForm } from "react-hook-form";

import styles from "./cadUsuario.module.css";
import style from "./CadTable.module.css";

import { useUserData } from "../../../hooks/useUserData";
import axios from "axios";

export default function CadUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modal = document.querySelector("#modal");

  const [open, setOpen] = useState(false);

  const [see, setSee] = useState(true);

  const { data } = useUserData();

  async function createUser(data) {
    await axios.post(import.meta.env.VITE_BASE_URL + "user", data);
    location.reload();
  }

  if (open === true) {
    modal.showModal();
  }

  function deleteButton(value) {
    axios.delete(import.meta.env.VITE_BASE_URL + 'user/' + value)
    location.reload();
  }

  function showButton() {
    setSee(!see);
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
                    {...register("username", { required: true })}
                  />
                </label>
                {errors.nome && (
                  <p className={styles.erro}>Informe o seu nome</p>
                )}
              </div>

              <div className={styles.inputForm}>
                <label>
                  E-mail:
                  <input
                    type="email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && (
                  <p className={styles.erro}>Informe seu email</p>
                )}
              </div>

              <div className={styles.inputForm}>
                <label>
                  Password:
                  <input
                    type="password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && (
                  <p className={styles.erro}>Informe uma senha</p>
                )}
              </div>

              <div className={styles.inputFormCheck}>
                <label>
                  Administrador:
                  <input type="checkbox" {...register("isAdmin")} />
                </label>
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
                <th>Admin</th>
                <th>id</th>
                <th>username</th>
                <th>email</th>
                <th>password</th>
                <th>Criado em</th>
                <th>Ultima Atualização</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((data) => (
                <tr key={data.id}>
                  <td>{data.isAdmin ? <ImCheckmark /> : <ImCross />}</td>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  {see != true ? 
                        <td className={styles.password}>
                            <p>{data.password}</p>
                            <RiEyeLine />
                        </td> : 
                        <td className={styles.password}>
                            <p>****</p>
                            <RiEyeCloseLine />
                        </td>
                    }
                  <td>{data.createdAt}</td>
                  <td>{data.updatedAt}</td>
                  <td>
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
                    <button
                      onClick={() => showButton()}
                      className={`${style.showButton} ${styles.btns}`}
                      value={data.id}
                    >
                      Mostrar
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
