import axios from 'axios'
import config from 'config'
import toast from 'libs/utils/toast'

const instance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
})

export const fetcher = (url) => {
  return instance
    .get(url)
    .then((res) => {
      return res?.data
    })
    .catch((err) => {
      toast({ type: 'error', description: err?.toString() })
    })
}

export default instance
