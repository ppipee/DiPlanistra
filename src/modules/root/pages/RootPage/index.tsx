import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import asRoute from 'core/router/hoc/asRoute'

import Footer from 'modules/root/components/Footer'
import GlobalStyles from 'modules/root/components/GlobalStyles'
import NavigationBar from 'modules/root/components/NavigationBar'
import UserStoreConfig from 'modules/user/stores/UserStore'

import { RootContainer, MainContainer } from './styled'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<RootContainer className="background-color">
		<NavigationBar />
		<GlobalStyles />
		<MainContainer>{renderRoutes(routes)}</MainContainer>
		<Footer />
	</RootContainer>
)

export default asRoute(RootPage, {
	stores: {
		userStore: UserStoreConfig,
	},
})
