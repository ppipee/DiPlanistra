import { useMemo } from 'react'

import qs from 'qs'
import { useLocation } from 'react-router-dom'

export default function useQuery<T = string>() {
	const { search } = useLocation()

	const query = useMemo(
		() => qs.parse(search, { ignoreQueryPrefix: true }) as Record<string, T & (string | string[])>,
		[search],
	)

	return query
}
