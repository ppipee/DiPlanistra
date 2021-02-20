import React, { useEffect, useState } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Button from 'common/components/Button'
import { CalenderDateProps } from 'common/components/Calendar/types'
import DateRangePicker from 'common/components/DateRangePicker'
import Flex from 'common/components/Flex'
import InputForm from 'common/components/form/InputForm'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import useOnChange from 'common/hooks/useOnChange'
import { LOCALE_SAVE } from 'common/locale'
import { main, green, black } from 'common/styles/colors'
import fontSizes from 'common/styles/mixins/fontSizes'
import spaces from 'common/styles/mixins/spaces'

import usePlannerSettingInfo from 'modules/trip/hooks/usePlannerSettingInfo'
import { TRIP_NAME } from 'modules/trip/locale'
import { usePlannerSettingStore } from 'modules/trip/stores/PlannerSettingStore/context'

import { TRIP_INFO_TITLE } from './locale'

const PlannerInfoEditor = () => {
	const I18n = useI18n()

	const { date: defaultDate, name } = usePlannerSettingInfo()
	const { updatePlanner, setPlannerInfo, clear } = usePlannerSettingStore((store) => ({
		updatePlanner: store.updatePlanner,
		setPlannerInfo: store.setPlannerInfo,
		clear: store.clear,
	}))

	const { keyword: plannerName, onChange } = useOnChange(name, [(name) => setPlannerInfo({ name })])
	const [date, setDate] = useState<CalenderDateProps>(defaultDate)

	const currentDate = new Date()
	const dateRangeShown = {
		startRange: { month: currentDate.getMonth(), year: currentDate.getFullYear() },
	}

	useEffect(() => {
		if (date.startDate && date.endDate) {
			setPlannerInfo({ startDate: date.startDate, endDate: date.endDate })
		}
	}, [date])

	useEffect(() => {
		return () => {
			clear()
		}
	}, [])

	return (
		<div>
			<Text as="div" margin={`0 0 ${spaces(12)}`} size={fontSizes(20)} weight="bold" color={black}>
				{I18n.t(TRIP_INFO_TITLE)}
			</Text>
			<Gap $type="vertical" $size={spaces(32)} $responsive $alignItems="stretch">
				<Gap $type="vertical" $size={spaces(8)}>
					<InputForm label={I18n.t(TRIP_NAME)} value={plannerName} onChange={onChange} />
					<Flex $justifyContent="center">
						<DateRangePicker date={date} setDate={setDate} dateRangeShown={dateRangeShown} />
					</Flex>
				</Gap>
				<Button $color={main[500]} $secondaryColor={green[500]} onClick={updatePlanner}>
					{I18n.t(LOCALE_SAVE)}
				</Button>
			</Gap>
		</div>
	)
}

export default PlannerInfoEditor
