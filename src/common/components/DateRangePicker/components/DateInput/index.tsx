import React from 'react'

import BaseDateInput from 'common/components/DateRangePicker/components/BaseDateInput'
import { useDateRangeContext } from 'common/components/DateRangePicker/context'
import getDisplayDate from 'common/components/DateRangePicker/utils/getDisplayDate/index'

import { DateInputWrapper } from './styled'

const INPUT_WIDTH = '214px'

type Props = {
	open: () => void
}

const DateInput = ({ open }: Props) => {
	const { date } = useDateRangeContext()

	const displayDate = getDisplayDate(date)

	return (
		<DateInputWrapper onClick={open}>
			<BaseDateInput $width={INPUT_WIDTH} value={displayDate} />
		</DateInputWrapper>
	)
}

export default DateInput
