import { useContext, Context } from 'react'

import { useObserver, MobXProviderContext } from 'mobx-react'

function useInject<Stores, Output>(dataSelector: (stores: Stores) => Output) {
  const mobxContext = useContext(MobXProviderContext as Context<Stores>)

  return useObserver(() => dataSelector(mobxContext))
}

export default useInject
