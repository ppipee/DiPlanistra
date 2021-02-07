import React from 'react'

import { Link } from 'react-router-dom'

import asRoute from 'core/router/hoc/asRoute'

import ResponsiveBlock from 'common/components/ResponsiveBlock'
import spaces from 'common/styles/mixins/spaces'

import PlaceCard from 'modules/place/components/PlaceCard'
import useMountFavoritePlaces from 'modules/place/hooks/useMountFavoritePlaces'
import { PLACE_PATH } from 'modules/place/routes/paths'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'

import { Container, FavoriteCardsList } from './styled'

const FavoritePlacesPageComponent = () => {
	const { isFresh, isLoading, favoritePlaces } = useMountFavoritePlaces()

	if (isFresh || isLoading) return null

	return (
		<Container>
			<ResponsiveBlock $padding={spaces(24)} $paddingMobile={spaces(16)}>
				<FavoriteCardsList>
					{favoritePlaces.map((favoritePlace) => (
						<Link to={`${PLACE_PATH}/${favoritePlace.publicId}`} key={`favorite-place-${favoritePlace.publicId}`}>
							<PlaceCard place={favoritePlace} isHighlight />
						</Link>
					))}
				</FavoriteCardsList>
			</ResponsiveBlock>
		</Container>
	)
}

export default asRoute(FavoritePlacesPageComponent, {
	stores: {
		favoritePlaceStore: FavoritePlaceStoreConfig,
	},
})
