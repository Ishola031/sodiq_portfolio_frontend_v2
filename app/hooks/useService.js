import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'

const fetchServices = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/serviceapi/`);
    return await res.data;
}



export function useServices() {
    return useQuery({
        queryKey: ['services'],
        queryFn: fetchServices,
    })
}