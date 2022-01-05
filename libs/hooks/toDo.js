import { useCallback } from 'react'
import useSWR, { mutate } from 'swr'
import api from 'libs/utils/api'
import toast from 'libs/utils/toast'

// Backend API endpoint
const path = '/'

export const useToDos = (query) => {
  const pathKeys = path + query

  // GET - Read all
  const { data, error, isValidating } = useSWR(pathKeys)

  // POST - Add one
  const onAdd = useCallback(async (values) => {
    try {
      const res = await api.post(path, values)
      // pop a toast on success
      res?.status === 200 && toast({ description: 'An item has been added' })
      // revalidate the data in the table
      mutate(pathKeys)
    } catch (err) {
      toast({ type: 'error', description: err?.toString() })
    }
  })

  return {
    data,
    onAdd,
    loading: (!error && !data) || isValidating,
  }
}
