import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + 'user');
    //console.log(response?.data.content);
    return response?.data.content;
}

export function useUserData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['user-data']
    });

    return {
        ...query,
        data: query.data
    }
}