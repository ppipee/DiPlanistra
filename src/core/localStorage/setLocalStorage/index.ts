export default function setLocalStorage(key: string, data: any) {
  try {
    const value = JSON.stringify(data)
    localStorage.setItem(key, value)

    return true
  } catch {
    return false
  }
}
