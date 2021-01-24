import loadable from 'core/loadable'

const RegisterPage = loadable(() => import(/* webpackChunkName: 'user.pages.register' */ './component'))

export default RegisterPage
