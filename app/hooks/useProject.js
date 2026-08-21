import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchProject = async (url) => {
    const res = await axios.get(url)
    return await res.data
}


export function useProjects(url) {
    return useQuery({
        queryKey: ['projects', url],
        queryFn: () => fetchProject(url),
    })
}