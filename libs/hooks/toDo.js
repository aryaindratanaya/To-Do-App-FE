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
  const onAdd = async (values) => {
    try {
      const res = await api.post(path, values)
      // pop a toast on success
      res?.status === 200 && toast({ description: 'An item has been added' })
      // revalidate the stale data after addition
      mutate(pathKeys)
      return res
    } catch (err) {
      toast({ type: 'error', description: err?.toString() })
    }
  }

  return {
    data,
    onAdd,
    loading: (!error && !data) || isValidating,
  }
}
