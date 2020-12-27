import { useContext } from 'react'

import CalendarContext from 'common/components/Calendar/context'

const useCalendarContext = () => useContext(CalendarContext)!

export default useCalendarContext
