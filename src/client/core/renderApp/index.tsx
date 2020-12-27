import React from 'react'

import { render } from 'react-dom'

import App from 'client/components/App'

import getCurrentLocale from 'core/locale/utils/getCurrentLocale'

export default function renderApp() {
	const locale = getCurrentLocale()
	const rootElement = document.getElementById('root')

	render(<App locale={locale} />, rootElement)
}
