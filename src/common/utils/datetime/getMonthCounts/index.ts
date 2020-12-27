import { MONTH_IN_A_YEAR } from '../constants'

type MonthStamp = {
	year: number
	month: number
}

export default function getMonthCounts({ year, month }: MonthStamp) {
	return year * MONTH_IN_A_YEAR + month
}
