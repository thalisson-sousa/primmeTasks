import axios from "axios";
import { useTasksData } from "../../hooks/useTasksData";
import LoadingSpinner from "../../components/spinnerComponent/LoadingSpinner";

import styles from "./GetTask.module.css";
import "./Pagination.css";

import Header from "../../components/layout/header/Header";
import SideBar from "../../components/layout/sideBar/SideBar";
import { useEffect, useState } from "react";
import TableTask from "../../components/tableTask/TableTask";
import SelectQtd from "../../components/selectQTD/SelectQtd";
import Pagination from "../../components/pagination/Pagination";

export default function GetTasks() {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading } = useTasksData();

  const [topics, setTopics] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + `tasks?size=${size}&page=${page}`
      );
      setTopics(response.data.content);
      setLimit(response.data.totalPages);
    };
    fetchData();
  }, [page, size]);

  const handlePage = (selected) => {
    setPage(selected);
  };

  const changeSize = (selected) => {
    setSize(selected);
  };

  return (
    <>
      <Header />
      <section className={styles.main}>
        <SideBar />
        <div className={styles.containerTables}>
          <div className={styles.tableWrapper}>
            {!isLoading && (
              <>
                <SelectQtd size={size} changeSize={changeSize} />

                <TableTask topics={topics} />

                <div className={styles.pagination}>
                  <Pagination limit={limit} handlePage={handlePage} />                  
                </div>
              </>
            )}
            {isLoading && <LoadingSpinner />}
          </div>
        </div>
      </section>
    </>
  );
}
