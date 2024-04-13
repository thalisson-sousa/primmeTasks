/* eslint-disable react/prop-types */
import styles from "./selectQtd.module.css";

export default function SelectQtd({ size, changeSize }) {
  //console.log(size);

  const handleChange = (event) => {
    changeSize(event.target.value);
  };

  return (
    <div className={styles.qtd}>
      <label htmlFor="qtd">Exibindo</label>
      <select
        name="Qtd"
        id="qtd"
        value={size}
        onChange={handleChange}
      >
        <option value="5">5 Usuários</option>
        <option value="10">10 Usuários</option>
        <option value="20">20 Usuários</option>
        <option value="30">30 Usuários</option>
      </select>
    </div>
  );
}
