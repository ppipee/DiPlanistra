import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Flex from 'common/components/Flex'
import TextAreaForm from 'common/components/form/TextAreaForm'
import Gap from 'common/components/Gap'
import TimePicker from 'common/components/TimePicker'
import { LOCALE_MEMO, LOCALE_END_TIME, LOCALE_START_TIME } from 'common/locale'
import useResponsive from 'common/styles/hooks/useResponsive'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import { LOCALE_PLACE } from 'modules/search/locale'
import DeletePlaceButton from 'modules/trip/components/DeletePlaceButton'
import PlaceSelector from 'modules/trip/components/PlaceSelector'
import useActivityState from 'modules/trip/hooks/useActivityState'
import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'
import { EditorMode } from 'modules/trip/types/store'
import convertActivityHourToTime from 'modules/trip/utils/convertActivityTimeToTime/index'

import DomainSelector from '../../DomainSelector'

import { ContainerWrapper } from './styled'

const TEXT_AREA_ROWS = 5

const MOBILE_MAX_ROW = 4
const DESKTOP_MAX_ROW = 6

const ActivityEditor = () => {
	const I18n = useI18n()
	const { isDesktop } = useResponsive()

	const { activityMode } = useActivityStore((store) => ({
		activityMode: store.mode,
	}))
	const { activityHour, setTime, placeSelectedIndex, setPlace, memo, onMemoChange } = useActivityState()

	const time = convertActivityHourToTime(activityHour)

	return (
		<ContainerWrapper as="div" size={fontSizes(18)} whiteSpace="pre">
			<Gap $size={spaces(16)} $type="vertical">
				<Gap $size={spaces(8)} $type="vertical">
					<Gap $size={spaces(4)} $alignCenter>
						<span>{`${I18n.t(LOCALE_START_TIME)} \t:`}</span>
						<TimePicker
							row={isDesktop ? DESKTOP_MAX_ROW : MOBILE_MAX_ROW}
							time={time.from}
							setTime={(time) => setTime(time, 'from')}
						/>
					</Gap>
					<Gap $size={spaces(4)} $alignCenter>
						<span>{`${I18n.t(LOCALE_END_TIME)} \t:`}</span>
						<TimePicker
							row={isDesktop ? DESKTOP_MAX_ROW : MOBILE_MAX_ROW}
							time={time.to}
							setTime={(time) => setTime(time, 'to')}
						/>
					</Gap>
				</Gap>
				<Gap $size={spaces(8)} $type="vertical">
					<span>{`${I18n.t(LOCALE_PLACE)} :`}</span>
					<DomainSelector />
					<PlaceSelector placeSelectedIndex={placeSelectedIndex} setPlace={setPlace} />
				</Gap>
				<Gap $size={spaces(8)} $type="vertical">
					<span>{`${I18n.t(LOCALE_MEMO)} :`}</span>
					<TextAreaForm onChange={onMemoChange} value={memo} rows={TEXT_AREA_ROWS} />
				</Gap>
				{activityMode === EditorMode.Update && (
					<Flex $justifyContent="flex-end">
						<DeletePlaceButton />
					</Flex>
				)}
			</Gap>
		</ContainerWrapper>
	)
}

export default ActivityEditor
