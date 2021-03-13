import { ReactElement } from 'react'

import { GapType } from 'common/components/Gap/types'
import { RadioProps } from 'common/components/Radio'

export interface RadioGroupProps {
	type?: GapType
	children: ReactElement<RadioProps & { value: string | number }>[]
	onChange: (value: string | number) => void
	value: string | number
	size?: string
}
