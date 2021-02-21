import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import BaseContainer from 'common/components/BaseContainer'
import Text from 'common/components/Text'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import { Spaces } from 'common/styles/mixins/spaces'

import { CITIES } from 'modules/root/components/ViewGroupSelector/constant'

import { SEARCH_EVENT_TITLE } from './locale'

const SearchEventText = () => {
	const I18n = useI18n()
	const query = useQuery()
	const { titleSize } = useFontSizeResponsive()
	const { regions } = query
	const cityText = CITIES.find((city) => city.id === Number(regions))?.name

	if (!cityText) return null

	return (
		<BaseContainer $padding={`${Spaces[16]} ${Spaces[12]}`}>
			<Text size={titleSize}>{`${I18n.t(SEARCH_EVENT_TITLE)} : ${cityText}`}</Text>
		</BaseContainer>
	)
}

export default SearchEventText
