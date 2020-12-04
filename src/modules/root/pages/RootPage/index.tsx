import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import Footer from 'modules/root/components/Footer'
import GlobalStyles from 'modules/root/components/GlobalStyles'
import NavigationBar from 'modules/root/components/NavigationBar'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<>
		<NavigationBar />
		<GlobalStyles />
		{renderRoutes(routes)}
		<Footer />
	</>
)

export default RootPage
