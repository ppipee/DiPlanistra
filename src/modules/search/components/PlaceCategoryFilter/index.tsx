import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Checkbox from 'common/components/Checkbox'
import CheckboxGroup from 'common/components/CheckboxGroup'
import useHandleCheckbox from 'common/components/CheckboxGroup/hooks/useHandleCheckbox'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { PlaceDomain, FoodCategory, HotelCategory, AttractionCategory } from '../../constants'

import { LOCALE_FOODS, LOCALE_PLACE_CATEGORY, LOCALE_HOTELS, LOCALE_ATTRACTIONS } from './locale'

type DomainCategory = typeof FoodCategory | typeof HotelCategory | typeof AttractionCategory
type DomainLocale =
	| Record<FoodCategory, string[]>
	| Record<HotelCategory, string[]>
	| Record<AttractionCategory, string[]>

interface DomainProps {
	category: DomainCategory
	locale: DomainLocale
}

const DOMAINS: Record<PlaceDomain, DomainProps> = {
	food: {
		category: FoodCategory,
		locale: LOCALE_FOODS,
	},
	hotel: {
		category: HotelCategory,
		locale: LOCALE_HOTELS,
	},
	attraction: {
		category: AttractionCategory,
		locale: LOCALE_ATTRACTIONS,
	},
	trip: {
		category: AttractionCategory,
		locale: LOCALE_ATTRACTIONS,
	},
}

const PlaceCategoryFilter = () => {
	const I18n = useI18n()
	const { domain } = useQuery()
	const categories = DOMAINS[domain as PlaceDomain].category
	const locales = DOMAINS[domain as PlaceDomain].locale

	const { onChange, checkboxValues } = useHandleCheckbox([''])

	if (!categories) return null

	return (
		<Gap $type="vertical" $size={spaces(8)}>
			<Text size={fontSizes(16)}>{I18n.t(LOCALE_PLACE_CATEGORY)}</Text>
			<CheckboxGroup onChange={onChange} values={checkboxValues}>
				{Object.values(categories).map((category) => (
					<Checkbox key={`place-category-filter-${category}`} value={category} label={I18n.t(locales[category])} />
				))}
			</CheckboxGroup>
		</Gap>
	)
}

export default PlaceCategoryFilter
