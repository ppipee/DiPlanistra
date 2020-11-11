import React from 'react'

import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

const RootPage = ({ route: { routes } }: RouteConfigComponentProps) => (
  <>{renderRoutes(routes)}</>
)

export default RootPage
