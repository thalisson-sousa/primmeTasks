import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + 'empresa');
    //console.log(response?.data.content);
    return response?.data.content;
}

export function useEmpresaData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data']
    });

    return {
        ...query,
        data: query.data
    }
}