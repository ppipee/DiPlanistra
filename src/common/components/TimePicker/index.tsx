import React, { useCallback } from 'react'

import { isNumber } from 'lodash'

import spaces from 'common/styles/mixins/spaces'
import setPrefixToDigi from 'common/utils/setPrefixToDigi'

import DropDown from '../DropDown'
import DropDownItem from '../DropDown/components/DropDownItem'
import Gap from '../Gap'

import { HOURS_PICKER, MINUTES_PICKER } from './constant'

const MAX_ROW = 8

type Props = {
	setTime: (time: Date) => void
	time: Date
	row?: number
}

const TimePicker = ({ setTime, time: defaultTime, row = MAX_ROW }: Props) => {
	const time = defaultTime || new Date()
	const hour = defaultTime?.getHours().toString()
	const minute = defaultTime?.getMinutes().toString()

	const setHour = useCallback(
		(hour: string | number) => {
			if (isNumber(+hour)) {
				const newTime = time

				newTime.setHours(+hour)
				setTime(newTime)
			}
		},
		[time],
	)

	const setMinute = useCallback(
		(minute: string | number) => {
			if (isNumber(+minute)) {
				const newTime = time

				newTime.setMinutes(+minute)
				setTime(newTime)
			}
		},
		[time],
	)

	return (
		<Gap $size={spaces(4)} $alignCenter $responsive>
			<DropDown
				value={hour}
				onChange={setHour}
				withOutlined={false}
				maxRow={row}
				placeholder="hour"
				variant="small"
				displayCenter
			>
				{HOURS_PICKER.map((hour) => (
					<DropDownItem key={`hour-${hour}`} value={hour.toString()} name={setPrefixToDigi(hour)} center />
				))}
			</DropDown>
			<span>:</span>
			<DropDown
				value={minute}
				onChange={setMinute}
				withOutlined={false}
				maxRow={row}
				placeholder="minute"
				variant="small"
				displayCenter
			>
				{MINUTES_PICKER.map((minute) => (
					<DropDownItem key={`minute-${minute}`} value={minute.toString()} name={setPrefixToDigi(minute)} center />
				))}
			</DropDown>
		</Gap>
	)
}

export default TimePicker
