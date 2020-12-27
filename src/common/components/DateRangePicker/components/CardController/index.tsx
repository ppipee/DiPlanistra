import React, { useCallback } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import { useDateRangeContext } from 'common/components/DateRangePicker/context'
import selectDateRange from 'common/components/DateRangePicker/utils/selectDateRange'

import { PickerControlProps } from '../DateRangeProvider'

import { Card } from './styled'

interface CardControllerProps extends PickerControlProps {
	name: string[]
	index: number
}

const CardController = ({ name, index, ...props }: CardControllerProps) => {
	const { date, setDate, selectController, isDateSelectable } = useDateRangeContext()
	const I18n = useI18n()

	const dateRange = selectDateRange(props, isDateSelectable)
	const selectRange = useCallback(() => {
		setDate(dateRange)
		selectController(index)
	}, [dateRange, index])

	const isSelected =
		Number(date.startDate) === Number(dateRange.startDate) && Number(date.endDate) === Number(dateRange.endDate)

	if (isSelected) {
		selectController(index)
	}

	return (
		<Card className="heading4 align-center" $isSelected={isSelected} onClick={selectRange}>
			{I18n.t(name)}
		</Card>
	)
}

export default CardController
