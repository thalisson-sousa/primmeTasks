import { useTasksData } from "../../../hooks/useTasksData";
import LoadingSpinner from "../../spinnerComponent/LoadingSpinner";

import styles from './GetTasks.module.css';

export default function GetTasks() {

    const { data, isLoading } = useTasksData();

  return (
    <section className={styles.Container}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nivel</th>
              <th>status</th>
              <th>protocolo</th>
              <th>designacao</th>
              <th>previsao</th>
              <th>atendente</th>
              <th>empresa</th>
              <th>filial</th>
              <th>sintomas</th>
              <th>motivo</th>
              <th>Criado em</th>
              <th>Ultima Atualização</th>
            </tr>
          </thead>
                  
          <tbody>
            {
            !isLoading && <>
                {data?.map(data => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
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
                        <td>{data.updatedAt}</td>
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
