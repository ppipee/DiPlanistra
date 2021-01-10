import filterObjectExistingValues from 'common/utils/filterObjectExistingValue'

interface PageParams {
	size?: number
	number?: number
	sort?: number
}

export default function getPageParams({ size, number, sort }: PageParams): Record<string, number> {
	const params = {}

	params['page.size'] = size
	params['page.number'] = number
	params['sort.type'] = sort

	return filterObjectExistingValues(params)
}
