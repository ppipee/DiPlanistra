import React from 'react'

import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import LocaleProvider from 'core/locale/components/LocaleProvider'
import { LocaleType } from 'core/locale/types'

import rootRoutes from 'modules/root/routes'

interface Props {
	locale: LocaleType
}

const App = ({ locale }: Props) => (
	<BrowserRouter>
		<LocaleProvider locale={locale}>{renderRoutes(rootRoutes)}</LocaleProvider>
	</BrowserRouter>
)

export default App
