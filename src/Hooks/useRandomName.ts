import handleError from '@/Helpers/handleError'
import { axiosInstance } from '@/Service/api'
import { BASE_URL, END_POINT } from '@/Service/constant'
import { useState } from 'react'
import { useQuery } from 'react-query'

const request = async () => {
  const { data } = await axiosInstance.request({
    method: 'GET',
    url: '',
  })
  return data
}

const useRandomName = (onCreateSuccess: any) => {
  const [error, setError] = useState<string | null>(null)

  const { isError, data, isFetching, refetch } = useQuery({
    queryKey: ['get-useRandomName'],
    queryFn: () => request(),
    onSuccess: (result) => {
      onCreateSuccess?.(result)
    },
    onError: (err) => {
      const { message } = handleError(err)
      setError(message || 'Something went wrong')
    },
    enabled: true,
  })
  return { isError, isFetching, data, error, refetch, setError }
}

export { useRandomName }
