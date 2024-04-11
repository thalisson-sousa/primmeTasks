/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

import { useForm } from "react-hook-form";

import "./Pagination.css";
import styles from "./cadUsuario.module.css";
import style from "./CadTable.module.css";

import axios from "axios";
import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/sideBar/SideBar";
import ReactPaginate from "react-paginate";

export default function CadUsuario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const modal = document.querySelector("#modal");

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(5);

  const [topics, setTopics] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchTopics() {
      const data = await fetch(
        `http://localhost:8080/user?size=${size}&page=${page}`
      );
      const topicsResponse = await data.json();
      setTopics(topicsResponse.content);
      setLimit(topicsResponse.totalPages);
    }
    fetchTopics();
  }, [page, size]);

  const handlePage = (event) => {
    setPage(event.selected);
  };

  async function createUser(data) {
    await axios.post(import.meta.env.VITE_BASE_URL + "user", data);
    location.reload();
  }

  if (open === true) {
    modal.showModal();
  }

  async function deleteButton(value) {
    await axios.delete(import.meta.env.VITE_BASE_URL + "user/" + value);
    location.reload();
  }

  const changeSize = (selected) => {
    console.log(selected);
    setSize(selected);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <section className={styles.containetSection}>
          <header className={styles.head}>
            <button className={styles.btn} onClick={() => setOpen(true)}>
              Cadastrar
            </button>
          </header>

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
                        {...register("name", { required: true })}
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
            <div className={style.qtd}>
              <label htmlFor="qtd">Exibindo</label>
              <select
                name="Qtd"
                id="qtd"
                value={size}
                onChange={(e) => changeSize(e.target.value)}
              >
                <option value="5">5 Usuários</option>
                <option value="10">10 Usuários</option>
                <option value="20">20 Usuários</option>
                <option value="30">30 Usuários</option>
              </select>
            </div>
            <div>
              <table className={style.flTable}>
                <thead>
                  <tr>
                    <th>Admin</th>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Criado em</th>
                    <th>Ultima Atualização</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {topics?.map((data) => (
                    <tr key={data.id}>
                      <td>{data.isAdmin ? <ImCheckmark /> : <ImCross />}</td>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.createdAt}</td>
                      <td>{data.updatedAt}</td>
                      <td>
                        <button
                          className={`${styles.editButton} ${styles.btns}`}
                        >
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
            <div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                previousLabel="< previous"
                pageCount={limit}
                onPageChange={handlePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                renderOnZeroPageCount={null}
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
