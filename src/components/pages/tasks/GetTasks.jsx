import axios from "axios";
import { useTasksData } from "../../../hooks/useTasksData";
import LoadingSpinner from "../../spinnerComponent/LoadingSpinner";

import styles from './GetTask.module.css';

export default function GetTasks() {

    const { data, isLoading } = useTasksData();

    function deleteButton(value) {
      axios.delete(import.meta.env.VITE_BASE_URL + 'task/' + value)
      location.reload();
    }

  return (
    <section className={styles.tableWrapper}>
        <table className={styles.flTable}>
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Status</th>
              <th>Protocolo</th>
              <th>Designacao</th>
              <th>Previsao</th>
              <th>Atendente</th>
              <th>Empresa</th>
              <th>Filial</th>
              <th>Sintomas</th>
              <th>Motivo</th>
              <th>Criação</th>
              <th>Ação</th>
            </tr>
          </thead>
                  
          <tbody>
            {
            !isLoading && <>
                {data?.map(data => (
                    <tr key={data.id}>
                        <td>{data.nivel}</td>
                        <td>{data.status}</td>
                        <td>{data.protocolo}</td>
                        <td>{data.designacao}</td>
                        <td>{data.previsao}</td>
                        <td>{data.atendente}</td>
                        <td>{data.empresa}</td>
                        <td>{data.filial}</td>
                        <td>{data.sintomas}</td>
                        <td>{data.motivo}</td>
                        <td>{data.createdAt}</td>
                        <td>
                          <button className={`${styles.editButton} ${styles.btn}`}>Editar</button>
                          <button onClick={e => deleteButton(e.target.value)} className={`${styles.deleteButton} ${styles.btn}`} value={data.id}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </>
            }
            {isLoading && <LoadingSpinner />}
          </tbody>
        </table>
    </section>
  );
}
