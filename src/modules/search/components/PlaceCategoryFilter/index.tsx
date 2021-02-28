import React, { memo, useCallback, useMemo } from 'react'

import { isArray, isEmpty } from 'lodash'

import useQuery from 'core/router/hooks/useQuery'

import Checkbox from 'common/components/Checkbox'
import CheckboxGroup from 'common/components/CheckboxGroup'
import useHandleCheckbox from 'common/components/CheckboxGroup/hooks/useHandleCheckbox'
import usePassQuery from 'common/hooks/usePassQuery'

import { Category } from 'modules/place/types/place'

type Props = {
	category: Category
}

const PlaceCategoryFilter = ({ category }: Props) => {
	const { categories: query } = useQuery()

	const queries = !query ? [] : isArray(query) ? [...query] : [query]

	const categoriesQuery = useMemo(
		() =>
			queries.filter((query) =>
				[category.id, ...category.categories.map((category) => category.id)]
					.map((category) => category.toString())
					.includes(query),
			),
		[queries, category],
	)

	const passQuery = usePassQuery()

	const passCategories = useCallback(
		(category: string, oldCategories: string[], categories: string[]) => {
			const newCategories = queries.filter((categoryQuery) => !oldCategories.includes(categoryQuery))

			const params = { categories: [...new Set([...newCategories, ...categories])] }

			passQuery({ params })
		},
		[passQuery, categoriesQuery],
	)
	const allValue = category.id.toString()

	const { onChange, checkboxValues } = useHandleCheckbox(categoriesQuery, [passCategories], allValue)

	if (isEmpty(category)) return null

	return (
		<CheckboxGroup
			key={`place-category-filter-${category.id}`}
			onChange={onChange}
			values={checkboxValues}
			withAllSelector
			allValue={allValue}
			label={category.name}
		>
			{category.categories.map((subCategory) => (
				<Checkbox
					key={`place-subcategory-filter-${subCategory.id}`}
					value={subCategory.id.toString()}
					label={subCategory.name}
				/>
			))}
		</CheckboxGroup>
	)
}

export default memo(PlaceCategoryFilter)
