import React, { ReactNode } from 'react'

import Calendar from 'common/components/Calendar'
import RangePickerPanelHeader from 'common/components/DateRangePicker/components/RangePickerPanelHeader'
import { useDateRangeContext } from 'common/components/DateRangePicker/context'
import Gap from 'common/components/Gap'
import spaces from 'common/styles/mixins/spaces'

import { Container } from './styled'

type Props = {
	children?: ReactNode
	showHeader?: boolean
}

const RangePickerPanel = ({ children, showHeader }: Props) => {
	const { date, setDate, isDateSelectable, dateRangeShown } = useDateRangeContext()

	return (
		<Container $size={spaces(24)}>
			<Gap $type="vertical" $size={spaces(12)}>
				{showHeader && <RangePickerPanelHeader />}
				<Calendar
					isDateSelectable={isDateSelectable}
					defaultDate={date}
					setDate={setDate}
					dateRangeShown={dateRangeShown}
				>
					{children}
				</Calendar>
			</Gap>
		</Container>
	)
}

export default RangePickerPanel
