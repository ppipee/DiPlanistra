import React, { useCallback } from 'react'

import { isEmpty } from 'lodash'

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
	const categoriesQuery = query ? [...query] : []
	const passQuery = usePassQuery()

	const passCategories = useCallback(
		(categories: string, moreCategories: string[]) => {
			const params = { categories: moreCategories }
			passQuery({ params })
		},
		[passQuery],
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

export default PlaceCategoryFilter
