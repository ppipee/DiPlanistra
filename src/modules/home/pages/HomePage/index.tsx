import loadable from 'core/loadable'

const HomePage = loadable(() => import(/* webpackChunkName: 'home.pages.home' */ './component'))

export default HomePage
