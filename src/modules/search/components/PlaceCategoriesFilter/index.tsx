import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import useCategories from 'modules/search/hooks/useCategories'

import PlaceCategoryFilter from '../PlaceCategoryFilter'

import { LOCALE_PLACE_CATEGORY } from './locale'

const PlaceCategoriesFilter = () => {
	const I18n = useI18n()

	const { categories, isCategoriesLoading } = useCategories()

	if (!categories || isCategoriesLoading) return null

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_PLACE_CATEGORY)}</Text>
			{categories.map((category) => (
				<PlaceCategoryFilter key={category.id} category={category} />
			))}
		</Gap>
	)
}

export default PlaceCategoriesFilter
