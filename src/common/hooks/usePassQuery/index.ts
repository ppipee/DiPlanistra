import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import useQuery from 'core/router/hooks/useQuery'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

interface PassQueryProps {
	params: Record<string, string | number | boolean | (string | number | boolean)[]>
	targetUrl?: string
	withOldQuery?: boolean
}

export default function usePassQuery() {
	const query = useQuery()
	const history = useHistory()

	const passQuery = useCallback(
		({ params, targetUrl, withOldQuery = true }: PassQueryProps) => {
			const newQuery = withOldQuery ? { ...query, ...params } : params

			const url = buildUrlWithParams(targetUrl || history.location.pathname, newQuery)

			history.push(url)
		},
		[history.location.pathname, query],
	)

	return passQuery
}
