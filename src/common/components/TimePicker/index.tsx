import React, { useCallback } from 'react'

import { isNumber } from 'lodash'

import spaces from 'common/styles/mixins/spaces'
import setPrefixToDigi from 'common/utils/setPrefixToDigi'

import DropDown from '../DropDown'
import DropDownItem from '../DropDown/components/DropDownItem'
import Gap from '../Gap'

import { HOURS_PICKER, MINUTES_PICKER } from './constant'

const MAX_HEIGHT = '300px'

type Props = {
	setTime: (time: Date) => void
	time: Date
}

const TimePicker = ({ setTime, time }: Props) => {
	const hour = time?.getHours().toString()
	const minute = time?.getMinutes().toString()

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
				maxHeight={MAX_HEIGHT}
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
				maxHeight={MAX_HEIGHT}
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
