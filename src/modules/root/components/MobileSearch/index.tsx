import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import { LOCALE_SEARCH } from 'common/locale'
import { Spaces } from 'common/styles/mixins/spaces'

import { SEARCH_TITLES_LOCALE } from 'modules/place/constants'
import DomainSelector from 'modules/root/components/DomainSelector'
import NavigateBackBar from 'modules/root/components/NavigateBackBar'
import SearchInput from 'modules/root/components/SearchInput'
import { DEFAULT_PLACE_DOMAIN } from 'modules/search/constants'
import { useMobileSearchInputStore } from 'modules/search/stores/MobileSearchInputStore/context'

import ViewGroupSelector from '../ViewGroupSelector'

import { Container } from './styled'

const MobileSearch = () => {
	const I18n = useI18n()
	const { domain = DEFAULT_PLACE_DOMAIN } = useQuery()
	const close = useMobileSearchInputStore((store) => store.close)

	const title = `${I18n.t(LOCALE_SEARCH)}${I18n.t(SEARCH_TITLES_LOCALE[Number(domain)])}`

	return (
		<Container>
			<NavigateBackBar back={close} title={title} />
			<Gap $size={Spaces[6]}>
				<DomainSelector />
				<SearchInput />
			</Gap>
			<ViewGroupSelector />
		</Container>
	)
}

export default MobileSearch
