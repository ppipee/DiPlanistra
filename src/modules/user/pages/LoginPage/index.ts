import loadable from 'core/loadable'

const LoginPage = loadable(() => import(/* webpackChunkName: 'user.pages.login' */ './component'))

export default LoginPage
