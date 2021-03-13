import React, { useEffect, useState } from 'react'

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

const TimePicker = ({ setTime, time, row = MAX_ROW }: Props) => {
	const defaultHour = time?.getHours().toString()
	const defaultMinute = time?.getMinutes().toString()

	const [minute, setMinute] = useState<string | number>(defaultMinute)
	const [hour, setHour] = useState<string | number>(defaultHour)

	useEffect(() => {
		if (minute && hour) {
			const newTime = time || new Date()

			newTime.setHours(Number(hour))
			newTime.setMinutes(Number(minute))
			setTime(newTime)
			setHour(null)
			setMinute(null)
		}
	}, [time, minute, hour])

	return (
		<Gap $size={spaces(4)} $alignCenter $responsive>
			<DropDown
				value={hour}
				onChange={setHour}
				defaultValue={defaultHour}
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
				defaultValue={defaultMinute}
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
