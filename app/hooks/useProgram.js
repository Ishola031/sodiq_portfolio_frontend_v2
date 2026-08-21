import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'


const fetchProgram = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/programapi/`)
    return await res.data
}



export function usePrograms() {
    return useQuery({
        queryKey: ['programs'],
        queryFn: fetchProgram,
    })
}