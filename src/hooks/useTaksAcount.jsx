import { useQuery } from "react-query";
import axios from "axios";

const fetchAberto = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + `tasks/Aberto`);
    // console.log(response?.data);
    return response?.data;
}

const fetchAndamento = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + `tasks/Andamento`);
    // console.log(response?.data);
    return response?.data;
}

const fetchConcluidos = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + `tasks/Concluido`);
    // console.log(response?.data);
    return response?.data;
}

const fetchFechados = async () => {
    const response = await axios.get(import.meta.env.VITE_BASE_URL + `tasks/Fechado`);
    // console.log(response?.data);
    return response?.data;
}

export function useTasksAcountAberto() {
    const query = useQuery({
        queryFn: fetchAberto,
        queryKey: ['task-data1']
    })

    return {
        ...query,
        aberto: query.data
    } 
}

export function useTasksAcountAndamento() {
    const query = useQuery({
        queryFn: fetchAndamento,
        queryKey: ['task-data2']
    })

    return {
        ...query,
        andamento: query.data
    } 
}

export function useTasksAcountConcluido() {
    const query = useQuery({
        queryFn: fetchConcluidos,
        queryKey: ['task-data3']
    })

    return {
        ...query,
        concluido: query.data
    } 
}

export function useTasksAcountFechados() {
    const query = useQuery({
        queryFn: fetchFechados,
        queryKey: ['task-data4']
    })

    return {
        ...query,
        fechado: query.data
    } 
}