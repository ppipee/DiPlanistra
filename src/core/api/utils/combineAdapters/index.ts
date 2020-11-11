import axios, { AxiosAdapter } from 'axios'

type CombineAdapterOption = [
	(adapter: AxiosAdapter, options?: Record<string, any>) => AxiosAdapter,
	Record<string, any>,
]

function combineAdapters(combineOptions: CombineAdapterOption[]) {
	return combineOptions.reduce(
		(adapter, [createAdapter, options]) => createAdapter(adapter, options),
		axios.defaults.adapter,
	)
}

export default combineAdapters
