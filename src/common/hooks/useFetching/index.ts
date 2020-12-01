import { useEffect, useState } from 'react'

import Axios from 'axios'

export enum FetchState {
	Fresh = 'fresh',
	Loading = 'loading',
	Loaded = 'loaded',
	Error = 'error',
}

export interface FetchProp<T> extends FetchStateProps {
	data: T
}

export interface FetchStateProps {
	isLoading: boolean
	isLoaded: boolean
	isFresh: boolean
	error: Error
}

export default function useFetching<T>(url: string): FetchProp<T> {
	const [state, setState] = useState<FetchState>(FetchState.Fresh)
	const [data, setData] = useState<T>(undefined)
	const [error, setError] = useState(undefined)

	useEffect(() => {
		setState(FetchState.Loading)
		Axios.get(url)
			.then((res) => {
				setData(res.data)
				setState(FetchState.Loaded)
			})
			.catch((err) => {
				setState(FetchState.Error)
				setError(err)
				setState(FetchState.Loaded)
			})

		return () => {
			setState(FetchState.Fresh)
		}
	}, [])

	return {
		isLoading: state === FetchState.Loading,
		isLoaded: state === FetchState.Loaded,
		isFresh: state === FetchState.Fresh,
		error,
		data,
	}
}
