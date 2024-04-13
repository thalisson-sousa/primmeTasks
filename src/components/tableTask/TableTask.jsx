import axios from "axios";
import styles from "./TableTask.module.css";
import TdDate from "../tdDate/TdDate";

export default function TableTask(topics) {
  
  function deleteButton(value) {
    axios.delete(import.meta.env.VITE_BASE_URL + "task/" + value);
    location.reload();
  }

  return (
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
        <>
          {topics?.topics.map((data) => (
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
              <TdDate createdOn={data.createdOn} />
              <td>
                <button className={`${styles.editButton} ${styles.btn}`}>
                  Editar
                </button>
                <button
                  onClick={(e) => deleteButton(e.target.value)}
                  className={`${styles.deleteButton} ${styles.btn}`}
                  value={data.id}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
}
