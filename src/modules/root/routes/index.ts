import RootPage from '../pages/RootPage'
import HomeRoute from 'modules/home/routes'

const rootRoute = {
  path: '/',
  component: RootPage,
  routes: [HomeRoute],
}

export default [rootRoute]
