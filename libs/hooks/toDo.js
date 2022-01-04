import axios from 'axios'
import config from 'config'
import toast from 'libs/utils/toast'

export function addToDo(values) {
  axios
    .post(config.API_HOST, values)
    .then((res) => {
      toast({ description: 'An item has been added' })
      console.log(res)
    })
    .catch((err) => {
      toast({ type: 'error', description: err.toString() })
    })
}
