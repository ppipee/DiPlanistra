import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import TextAreaForm from 'common/components/form/TextAreaForm'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import TimePicker from 'common/components/TimePicker'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { LOCALE_PLACE } from 'modules/search/locale'
import useActivityState from 'modules/trips/hooks/useActivityState'
import { useActivityStore } from 'modules/trips/stores/ActivityStore/context'
import convertActivityHourToTime from 'modules/trips/utils/convertActivityTimeToTime/index'

import { LOCALE_MEMO } from '../activity/locale'
import DeletePlaceButton from '../DeletePlaceButton'
import PlaceSelector from '../PlaceSelector'

import { LOCALE_END_TIME, LOCALE_START_TIME } from './locale'

const TEXT_AREA_ROWS = 5

const ActivityEditor = () => {
	const I18n = useI18n()
	const favoritePlaces = useActivityStore((store) => store.favoritePlaces || [])
	const { activityHour, setTime, placeSelectedIndex, setPlace, memo, onMemoChange } = useActivityState()

	const time = convertActivityHourToTime(activityHour)

	return (
		<div>
			<Text size={fontSizes(18)} whiteSpace="pre">
				<Gap $size={spaces(16)} $type="vertical">
					<Gap $size={spaces(8)} $type="vertical">
						<Gap $size={spaces(4)} $alignCenter>
							<span>{`${I18n.t(LOCALE_START_TIME)} \t:`}</span>
							<TimePicker time={time.from} setTime={(time) => setTime(time, 'from')} />
						</Gap>
						<Gap $size={spaces(4)} $alignCenter>
							<span>{`${I18n.t(LOCALE_END_TIME)} \t:`}</span>
							<TimePicker time={time.to} setTime={(time) => setTime(time, 'to')} />
						</Gap>
					</Gap>
					<Gap $size={spaces(8)} $type="vertical">
						<span>{`${I18n.t(LOCALE_PLACE)} :`}</span>
						<PlaceSelector places={favoritePlaces} placeSelectedIndex={placeSelectedIndex} setPlace={setPlace} />
					</Gap>
					<Gap $size={spaces(8)} $type="vertical">
						<span>{`${I18n.t(LOCALE_MEMO)} :`}</span>
						<TextAreaForm onChange={onMemoChange} value={memo} rows={TEXT_AREA_ROWS} />
					</Gap>
					<Flex $justifyContent="flex-end">
						<DeletePlaceButton />
					</Flex>
				</Gap>
			</Text>
		</div>
	)
}

export default ActivityEditor
