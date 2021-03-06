import { useCallback } from 'react'

import { omit } from 'lodash'
import { useHistory } from 'react-router-dom'

import useQuery from 'core/router/hooks/useQuery'

import buildUrlWithParams from 'common/utils/buildUrlWithParams'

interface PassQueryProps {
	params: Record<string, string | number | boolean | (string | number | boolean)[]>
	targetUrl?: string
	withOldQuery?: boolean
	without?: string[]
}

export default function usePassQuery() {
	const query = useQuery()
	const history = useHistory()

	const passQuery = useCallback(
		({ params, targetUrl, withOldQuery = true, without }: PassQueryProps) => {
			let newQuery = withOldQuery ? { ...query, ...params } : params

			if (without) {
				newQuery = omit(newQuery, without)
			}

			const url = buildUrlWithParams(targetUrl || history.location.pathname, newQuery)

			history.push(url)
		},
		[history.location.pathname, query],
	)

	return passQuery
}
