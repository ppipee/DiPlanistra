import React from 'react'

import asRoute from 'core/router/hoc/asRoute'
import withAuth from 'core/router/hoc/withAuth'
import useQuery from 'core/router/hooks/useQuery'

import { DomainValue } from 'common/constants/business'

import ErrorPage from 'modules/notFound/pages/ErrorPage'
import FavoriteCardList from 'modules/place/components/FavoriteCardList'
import FavoriteStoreConfig from 'modules/place/stores/FavoriteStore'
import { useFavoriteStore } from 'modules/place/stores/FavoriteStore/context'

import { FavoriteTabs } from './styled'

const FavoritePlacesPageComponent = () => {
	const { category } = useQuery()
	const favoriteError = useFavoriteStore((store) => store.error)

	if (favoriteError) return <ErrorPage errorMessage={favoriteError?.message} />

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
