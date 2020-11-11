import qs from 'qs'
import { useLocation } from 'react-router-dom'

export default function useQuery<T = string>() {
  const { search } = useLocation()

  return qs.parse(search, { ignoreQueryPrefix: true }) as Record<
    string,
    T & string
  >
}
