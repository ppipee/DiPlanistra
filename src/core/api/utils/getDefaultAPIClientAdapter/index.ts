import { cacheAdapterEnhancer, retryAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'

import { DEFAULT_RETRY_TIMES } from 'core/api/constants'
import combineAdapters from 'core/api/utils/combineAdapters'

function getDefaultAPIClientAdapter(
	defaultRetryTimes: number = DEFAULT_RETRY_TIMES,
	defaultThrottle?: number,
	cacheEnabled: boolean = true,
) {
	return combineAdapters([
		[
			cacheAdapterEnhancer,
			{
				enabledByDefault: cacheEnabled,
			},
		],
		[
			throttleAdapterEnhancer,
			{
				threshold: defaultThrottle,
			},
		],
		[
			retryAdapterEnhancer,
			{
				times: defaultRetryTimes,
			},
		],
	])
}

export default getDefaultAPIClientAdapter
