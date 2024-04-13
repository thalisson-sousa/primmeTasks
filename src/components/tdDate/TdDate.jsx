
import formatarData from "../../hooks/formatarData";

// eslint-disable-next-line react/prop-types
export default function TdDate({ createdOn }) {

    const dataFormatada = formatarData(createdOn);

    return (
        <td>{dataFormatada}</td>
    );
}