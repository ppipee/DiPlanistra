import React, { useCallback, useEffect, useState } from 'react'

import { isArray, isEmpty } from 'lodash'
import { useParams } from 'react-router'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'
import { Params } from 'core/router/types'

import usePassQuery from 'common/hooks/usePassQuery'

import { CATEGORY_TITLES_LOCALE } from 'modules/place/constants'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'

import CategoriesModal from '../CategoriesModal'

type Props = {
	onClose: () => void
}

const PlaceCategoriesSelector = ({ onClose }: Props) => {
	const I18n = useI18n()
	const { domain = DEFAULT_PLACE_DOMAIN } = useParams<Params>()

	const passQuery = usePassQuery()
	const { categories: query } = useQuery()
	const queries = !query ? [] : isArray(query) ? query : [query]

	const [categoriesSelected, setCategories] = useState<string[]>(queries)

	useEffect(() => {
		if (!isEmpty(queries)) {
			setCategories(queries)
		}
	}, [query])

	useEffect(() => {
		return () => {
			setCategories([])
		}
	}, [])

	const selectCategory = useCallback(
		(category, oldCategories: string[], categories: string[]) => {
			const newCategories = (categoriesSelected || []).filter(
				(categorySelected) => !oldCategories.includes(categorySelected),
			)

			setCategories([...new Set([...newCategories, ...categories])])
		},
		[categoriesSelected],
	)

	const onCancel = useCallback(() => {
		setCategories([])
		onClose()
	}, [])

	const onConfirm = useCallback(async () => {
		const params = { categories: categoriesSelected }

		passQuery({ params })
		onCancel()
	}, [categoriesSelected, passQuery])

	return (
		<CategoriesModal
			title={I18n.t(CATEGORY_TITLES_LOCALE[domain])}
			categoriesSelected={categoriesSelected}
			selectCategory={selectCategory}
			onCancel={onCancel}
			onConfirm={onConfirm}
			domain={domain}
		/>
	)
}

export default PlaceCategoriesSelector
