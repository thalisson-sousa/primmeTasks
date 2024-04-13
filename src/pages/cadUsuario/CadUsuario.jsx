/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import "./Pagination.css";
import styles from "./cadUsuario.module.css";
import style from "./CadTable.module.css";

import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/sideBar/SideBar";
import SelectQtd from "../../components/selectQTD/SelectQtd";
import Pagination from "../../components/pagination/Pagination";
import TableUser from "../../components/tableUser/TableUser";
import FormCadUser from "../../components/formCadUser/FormCaduser";

export default function CadUsuario() {
  

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

  const handlePage = (selected) => {
    setPage(selected);
  };

  if (open === true) {
    modal.showModal();
  }

  const changeSize = (selected) => {
    setSize(selected);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <section className={styles.containerSection}>
          <header className={styles.head}>
            <button className={styles.btn} onClick={() => setOpen(true)}>
              Cadastrar
            </button>
          </header>

          <section className={styles.Container}>
            <div>
              <dialog id="modal" className={styles.Container}>
                <FormCadUser />
              </dialog>
            </div>
          </section>

          <section className={style.tableWrapper}>
            <SelectQtd size={size} changeSize={changeSize} />

            <TableUser topics={topics} />

            <Pagination limit={limit} handlePage={handlePage} />
          </section>
        </section>
      </main>
    </>
  );
}
