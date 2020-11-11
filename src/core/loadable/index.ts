import baseLoadable, { DefaultComponent } from '@loadable/component'

function loadable<T>(
  loader: () => Promise<DefaultComponent<T>>,
  fallback?: JSX.Element,
  ssr = true
) {
  return baseLoadable(loader, { fallback, ssr })
}

export default loadable
