import React, { ReactText, useCallback, useState } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import DropDown from 'common/components/DropDown'
import DropDownItem from 'common/components/DropDown/components/DropDownItem'
import InputField from 'common/components/field/InputField'
import Gap from 'common/components/Gap'
import SearchIcon from 'common/components/icons/SearchIcon'
import { white } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'
import { CategoryPlace } from 'common/types/place/index'

import { SelectorAttraction, SelectorHotel, SelectorRestaurant, SelectorTrip } from './locales'
import { DropDownWrapper, InputWrapper } from './styled'

const SearchInput = () => {
	const I18n = useI18n()
	const [category, setCategory] = useState(CategoryPlace.Attraction)

	const onCategoryChange = useCallback((value: ReactText) => {
		setCategory(value as CategoryPlace)
	}, [])

	return (
		<Gap $size={spaces(2)}>
			<DropDownWrapper>
				<DropDown defaultValue={category} onChange={onCategoryChange}>
					<DropDownItem value={CategoryPlace.Attraction} name={I18n.t(SelectorAttraction)} />
					<DropDownItem value={CategoryPlace.Restaurant} name={I18n.t(SelectorRestaurant)} />
					<DropDownItem value={CategoryPlace.Hotel} name={I18n.t(SelectorHotel)} />
					<DropDownItem value={CategoryPlace.Trip} name={I18n.t(SelectorTrip)} />
				</DropDown>
			</DropDownWrapper>
			<InputWrapper>
				<InputField $prefixIcon={SearchIcon} $iconColor={white} $prefixClickable />
			</InputWrapper>
		</Gap>
	)
}

export default SearchInput
