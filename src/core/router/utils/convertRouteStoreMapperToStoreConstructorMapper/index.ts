import { StoreConstructorMapper } from 'core/mobx/types'
import { RouteStoreMapper } from 'core/router/types'

function convertRouteStoreMapperToStoreConstructorMapper(mapper: RouteStoreMapper) {
	return Object.keys(mapper).reduce(
		(currentMapper, key) => ({
			...currentMapper,
			[key]: mapper[key].class,
		}),
		{} as StoreConstructorMapper,
	)
}

export default convertRouteStoreMapperToStoreConstructorMapper
