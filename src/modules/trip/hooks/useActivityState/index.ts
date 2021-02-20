import { useCallback, useState } from 'react'

import useOnChange from 'common/hooks/useOnChange'
import setPrefixToDigi from 'common/utils/setPrefixToDigi'

import { useFavoritePlaceStore } from 'modules/place/stores/FavoritePlaceStore/context'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'

export default function useActivityState() {
	const [placeSelectedIndex, setPlaceIndex] = useState<number>(-1)
	const { setActivity, ...activityInfo } = useActivityStore((store) => ({
		memo: store.memo,
		activityHour: store.hour,
		setActivity: store.setActivity,
	}))
	const favoritePlaces = useFavoritePlaceStore((store) => store.favoritePlaces)

	const setTime = useCallback(
		(time: Date, stateKey: 'to' | 'from') => {
			const minute = setPrefixToDigi(time.getMinutes())
			const hour = setPrefixToDigi(time.getHours())

			const newTime = `${hour}:${minute}`
			setActivity({
				hour: {
					...activityInfo.activityHour,
					[stateKey]: newTime,
				},
			})
		},
		[activityInfo.activityHour],
	)

	const setMemo = useCallback((memo: string) => {
		setActivity({ memo })
	}, [])

	const { onChange: onMemoChange } = useOnChange(activityInfo.memo || '', [setMemo])

	const setPlace = useCallback(
		(placeSelectedIndex: number) => {
			const placeId = favoritePlaces[placeSelectedIndex].publicId

			setPlaceIndex(placeSelectedIndex)
			setActivity({ placeId })
		},
		[favoritePlaces],
	)

	return { setPlace, onMemoChange, setTime, placeSelectedIndex, ...activityInfo }
}
