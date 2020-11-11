import React from 'react'

import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import rootRoutes from 'modules/root/routes'
import LocaleProvider from 'core/locale/components/LocaleProvider'
import { LocaleType } from 'core/locale/types'

interface Props {
  locale: LocaleType
}

const App = ({ locale }: Props) => (
  <BrowserRouter>
    <LocaleProvider locale={locale}>{renderRoutes(rootRoutes)}</LocaleProvider>
  </BrowserRouter>
)

export default App
