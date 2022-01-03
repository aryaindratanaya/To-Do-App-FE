import { notification } from 'antd'
import capitalizeFirstLetter from './capitalizeFirstLetter'

/**
 * Generate a notification toast.
 * @param {string} type - 'success' || 'info' || 'warning' || 'error'.
 * @param {string} message - Preferably not to be left empty.
 * @param {string} description - Can be left empty.
 */
const toast = ({
  type = 'success',
  message = capitalizeFirstLetter(type),
  description,
}) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottomRight',
  })
}

export default toast
