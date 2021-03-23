import { useCallback, useEffect, useState } from 'react'

import { isNil } from 'lodash'

import { DomainValue } from 'common/constants/business'
import useOnChange from 'common/hooks/useOnChange'
import setPrefixToDigi from 'common/utils/setPrefixToDigi'

import { EventPreview } from 'modules/event/types'
import { useFavoriteStore } from 'modules/place/stores/FavoriteStore/context'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { ActivityPlace } from 'modules/trip/types/planner'

export default function useActivityState() {
	const [placeSelectedIndex, setPlaceIndex] = useState<number>(-1)
	const { setActivity, placeId, domain, ...activityInfo } = useActivityStore((store) => ({
		memo: store.memo,
		activityHour: store.hour,
		setActivity: store.setActivity,
		placeId: store.placeId,
		domain: store.domain,
	}))

	const favoritePlaces: (ActivityPlace & EventPreview)[] = useFavoriteStore(
		(store) => store.favoritesMapper[store.domain],
	)

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
			const placeId = favoritePlaces[placeSelectedIndex]?.publicId || favoritePlaces[placeSelectedIndex]?.eventId

			setPlaceIndex(placeSelectedIndex)
			setActivity({ placeId })
		},
		[favoritePlaces],
	)

	useEffect(() => {
		if (!favoritePlaces) return

		if (placeId && domain === DomainValue.EVENT) {
			const index = favoritePlaces.findIndex((place) => place.eventId === placeId)

			setPlaceIndex(index)
		} else if (placeId && domain !== DomainValue.EVENT) {
			const index = favoritePlaces.findIndex((place) => place.publicId === placeId)

			setPlaceIndex(index)
		}
	}, [placeId, favoritePlaces, domain])

	useEffect(() => {
		setPlaceIndex(-1)
	}, [domain])

	useEffect(() => {
		if (placeSelectedIndex === -1 && !!favoritePlaces) {
			const index = favoritePlaces.findIndex(
				(place) => !isNil(placeId) && (place.publicId === placeId || place.eventId === placeId),
			)

			setPlaceIndex(index)
		}
	}, [favoritePlaces, placeSelectedIndex])

	return { setPlace, onMemoChange, setTime, placeSelectedIndex, ...activityInfo }
}
