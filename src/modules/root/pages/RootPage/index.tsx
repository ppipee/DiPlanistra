import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import asRoute from 'core/router/hoc/asRoute'

import { MixinsGlobalStyles } from 'common/styles/mixins'

import FavoriteEventStoreConfig from 'modules/event/stores/FavoriteEventStore'
import FavoritePlaceStoreConfig from 'modules/place/stores/FavoritePlaceStore'
import Footer from 'modules/root/components/Footer'
import GlobalStyles from 'modules/root/components/GlobalStyles'
import NavigationBar from 'modules/root/components/NavigationBar'
import MobileSearchInputStoreConfig from 'modules/search/stores/MobileSearchInputStore'
import UserStoreConfig from 'modules/user/stores/UserStore'

import { RootContainer, MainContainer } from './styled'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<RootContainer className="background-color">
		<NavigationBar />
		<GlobalStyles />
		<MixinsGlobalStyles />
		<MainContainer>{renderRoutes(routes)}</MainContainer>
		<Footer />
	</RootContainer>
)

export default asRoute(RootPage, {
	stores: {
		userStore: UserStoreConfig,
		favoritePlaceStore: FavoritePlaceStoreConfig,
		favoriteEventStore: FavoriteEventStoreConfig,
		mobileSearchInputStore: MobileSearchInputStoreConfig,
	},
})
