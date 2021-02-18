import { useEffect } from 'react'

import { isNumber } from 'lodash'

import useQuery from 'core/router/hooks/useQuery'

import { DomainValue } from 'common/constants/business'

import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

export default function useCategories() {
	const { domain } = useQuery()
	const { categories, isCategoriesLoading, getCategories } = useSearchPlaceStore((store) => ({
		categories: store.categories,
		isCategoriesLoading: store.isActionLoading['getCategories'],
		getCategories: store.getCategories,
	}))

	useEffect(() => {
		if (!domain) {
			getCategories()
		}
	}, [])

	useEffect(() => {
		if (domain && isNumber(+domain)) {
			getCategories(+domain as DomainValue)
		}
	}, [domain])

	return { categories, isCategoriesLoading }
}
