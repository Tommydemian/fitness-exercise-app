import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const apikey = import.meta.env.VITE_X_RAPID_API_KEY

const headers = {
  'X-RapidAPI-Key': apikey,
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}

export const useFetch = (ukey, endpointPath) => {

    const { data, isLoading, refetch } = useQuery([ukey], () => {
        return axios.get(`https://exercisedb.p.rapidapi.com${endpointPath}`, { headers }).then(res => res.data)
    })

    const refetchData = () => {
        refetch()
    }

    return {data, isLoading, refetchData}
}