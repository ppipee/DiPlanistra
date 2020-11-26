import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import GlobalStyles from 'modules/root/components/GlobalStyles'
import NavigationBar from 'modules/root/components/NavigationBar'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<>
		<NavigationBar />
		<GlobalStyles />
		{renderRoutes(routes)}
	</>
)

export default RootPage
