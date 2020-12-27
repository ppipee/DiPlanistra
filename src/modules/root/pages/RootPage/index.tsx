import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import Footer from 'modules/root/components/Footer'
import GlobalStyles from 'modules/root/components/GlobalStyles'
import NavigationBar from 'modules/root/components/NavigationBar'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootContainer, MainContainer } from './styled'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
	<>
		{/* <RootContainer> */}
		<NavigationBar />
		<GlobalStyles />
		<MainContainer>{renderRoutes(routes)}</MainContainer>
		<Footer />
		{/* </RootContainer> */}
	</>
)

export default RootPage
