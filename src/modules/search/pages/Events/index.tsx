import loadable from 'core/loadable'

const EventsPage = loadable(() => import(/* webpackChunkName: 'search.page.events' */ './component'))

export default EventsPage
