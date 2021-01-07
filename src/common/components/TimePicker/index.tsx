import React, { useEffect, useState } from 'react'

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
	const [hour, setHour] = useState<string | number>(time?.getHours().toString())
	const [minute, setMinute] = useState<string | number>(time?.getMinutes().toString())

	useEffect(() => {
		if (!isNaN(+hour) && !isNaN(+minute)) {
			const newTime = new Date()

			newTime.setHours(+hour, +minute)
			setTime(newTime)
		}
	}, [hour, minute])

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
					<DropDownItem key={`hour-${hour}`} value={hour} name={setPrefixToDigi(hour)} center />
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
					<DropDownItem key={`minute-${minute}`} value={minute} name={setPrefixToDigi(minute)} center />
				))}
			</DropDown>
		</Gap>
	)
}

export default TimePicker
