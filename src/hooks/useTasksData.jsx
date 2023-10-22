import { useQuery } from "react-query";
import axios from "axios";

const fetchData = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + 'tasks');
    // console.log(response?.data);
    return response?.data;
}

export function useTasksData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['task-data']
    })

    return {
        ...query,
        data: query.data
    } 
}