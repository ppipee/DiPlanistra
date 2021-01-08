import { useCallback } from 'react'

import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import { EditorMode } from 'modules/trips/types/planner'

export default function useSetActivityMode() {
	const setActivityMode = useActivityStore((store) => store.setActivityMode)

	const setCreatorMode = useCallback(() => {
		setActivityMode(EditorMode.Create)
	}, [])

	const setUpdaterMode = useCallback(() => {
		setActivityMode(EditorMode.Update)
	}, [])

	return { setCreatorMode, setUpdaterMode }
}
