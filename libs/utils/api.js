import axios from 'axios'
import config from 'config'

const instance = axios.create({
  baseURL: config.API_HOST,
  timeout: 40000,
})

export default instance
