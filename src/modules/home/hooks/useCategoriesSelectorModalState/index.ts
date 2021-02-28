import { useEffect } from 'react'

import useSwitch from 'common/hooks/useSwitch'

import { useUserStore } from 'modules/user/stores/UserStore/context'

export default function useCategoriesSelectorModalState() {
	const placeCategories = useUserStore((store) => store.user?.placeCategories)
	const { isOpen, close, open } = useSwitch(placeCategories === null)

	useEffect(() => {
		if (placeCategories === null) {
			open()
		}
	}, [placeCategories])

	return { isOpen, close }
}
