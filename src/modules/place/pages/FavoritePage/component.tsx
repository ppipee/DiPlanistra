import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import useQuery from 'core/router/hooks/useQuery'

import { DomainValue } from 'common/constants/business'

import FavoriteCardList from 'modules/place/components/FavoriteCardList'
import FavoriteStoreConfig from 'modules/place/stores/FavoriteStore'

import { FavoriteTabs } from './styled'

const FavoritePlacesPageComponent = () => {
	const { category } = useQuery()

	return (
		<div>
			<FavoriteTabs domain={Number(category) || DomainValue.ATTRACTION}>
				<FavoriteCardList />
			</FavoriteTabs>
		</div>
	)
}

export default withAuth(
	asRoute(FavoritePlacesPageComponent, {
		stores: {
			favoriteStore: FavoriteStoreConfig,
		},
	}),
)
