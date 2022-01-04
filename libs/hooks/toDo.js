import { useCallback } from 'react'
import useSWR from 'swr'
import api from 'libs/utils/api'
import toast from 'libs/utils/toast'

// Backend API endpoint
const path = '/'

export const useToDos = (query) => {
  const pathKeys = path + query

  // GET - Read all
  const { data, error } = useSWR(pathKeys)

  // POST - Add one
  const onAdd = useCallback(async (values) => {
    try {
      const res = await api.post(path, values)
      console.log(res)
    } catch (err) {
      console.log(err)
      toast({ type: 'error', description: err.toString() })
    }
  })

  return {
    data,
    onAdd,
    loading: !error && !data,
  }
}
