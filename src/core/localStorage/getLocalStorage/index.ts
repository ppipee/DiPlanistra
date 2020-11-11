import { isNil } from 'lodash'

export default function getLocalStorage(key: string) {
  const value = localStorage.getItem(key)

  if (isNil(value)) {
    return value
  }

  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}
