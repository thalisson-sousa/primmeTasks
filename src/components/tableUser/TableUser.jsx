import axios from "axios";
import { ImCheckmark, ImCross } from "react-icons/im";

import styles from "./TableUser.module.css";
import TdDate from "../tdDate/TdDate";

export default function TableUser(topics) {

    async function deleteButton(value) {
        await axios.delete(import.meta.env.VITE_BASE_URL + "user/" + value);
        location.reload();
      }

    return (
        <div>
              <table className={styles.flTable}>
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
                  {topics?.topics.map((data) => (
                    <tr key={data.id}>
                      <td>{data.isAdmin ? <ImCheckmark /> : <ImCross />}</td>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <TdDate createdOn={data.createdOn} />
                      <TdDate createdOn={data.lastUpdatedOn} />
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
    );
}