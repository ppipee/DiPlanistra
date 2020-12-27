import React from 'react'

import useLocale from 'core/locale/hooks/useLocale'

import useCalendarContext from 'common/components/Calendar/hooks/useCalendarContext'
import useNavigate from 'common/components/Calendar/hooks/useNavigate'
import ArrowIcon from 'common/components/icons/ArrowIcon'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { HeaderContainer, ArrowWrapper } from './styled'

const ICON_SIZE = 20

const CalendarHeader = () => {
	const {
		displayState: { month, year },
	} = useCalendarContext()
	const { setPrevMonth, setNextMonth, isNextMonthAvailable, isPrevMonthAvailable } = useNavigate()
	const locale = useLocale()

	return (
		<HeaderContainer>
			<ArrowWrapper $back onClick={setPrevMonth} $disabled={!isPrevMonthAvailable}>
				<ArrowIcon size={ICON_SIZE} />
			</ArrowWrapper>
			<div className="heading4">{getDateTimeFormat(new Date(year, month, 1), locale, 'MMMM YYYY')}</div>
			<ArrowWrapper onClick={setNextMonth} $disabled={!isNextMonthAvailable}>
				<ArrowIcon size={ICON_SIZE} />
			</ArrowWrapper>
		</HeaderContainer>
	)
}

export default CalendarHeader
