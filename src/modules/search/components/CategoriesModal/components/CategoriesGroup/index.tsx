import React, { memo, useMemo } from 'react'

import { isEmpty } from 'lodash'

import Checkbox from 'common/components/Checkbox'
import CheckboxGroup from 'common/components/CheckboxGroup'
import useHandleCheckbox from 'common/components/CheckboxGroup/hooks/useHandleCheckbox'

import { Category } from 'modules/place/types/place'
import { useCategoriesContext } from 'modules/search/components/CategoriesModal/context'

type Props = {
	category: Category
}

const CategoriesGroup = ({ category }: Props) => {
	const { categoriesSelected, selectCategory } = useCategoriesContext()
	const categoriesQuery = useMemo(
		() =>
			categoriesSelected.filter((query) =>
				[...(category?.id ? [category.id] : []), ...category.categories.map((category) => category.id)]
					.map((category) => category.toString())
					.includes(query),
			),
		[categoriesSelected, category],
	)
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
