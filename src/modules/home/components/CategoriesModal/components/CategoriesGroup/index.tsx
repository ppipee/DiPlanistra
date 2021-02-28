import React, { memo } from 'react'

import { isEmpty } from 'lodash'

import Checkbox from 'common/components/Checkbox'
import CheckboxGroup from 'common/components/CheckboxGroup'
import useHandleCheckbox from 'common/components/CheckboxGroup/hooks/useHandleCheckbox'

import { useCategoriesContext } from 'modules/home/components/CategoriesModal/context'
import { Category } from 'modules/place/types/place'

type Props = {
	category: Category
}

const CategoriesGroup = ({ category }: Props) => {
	const { categoriesSelected, selectCategory } = useCategoriesContext()
	const categoriesQuery = categoriesSelected ? [...categoriesSelected] : []

	const allValue = category.id.toString()

	const { onChange, checkboxValues } = useHandleCheckbox(categoriesQuery, [selectCategory], allValue)

	if (isEmpty(category)) return null

	return (
		<CheckboxGroup
			key={`category-filter-${category.id}`}
			onChange={onChange}
			values={checkboxValues}
			withAllSelector
			allValue={allValue}
			label={category.name}
			type="grid"
		>
			{category.categories.map((subCategory) => (
				<Checkbox
					key={`subcategory-filter-${subCategory.id}`}
					value={subCategory.id.toString()}
					label={subCategory.name}
				/>
			))}
		</CheckboxGroup>
	)
}

export default memo(CategoriesGroup)
