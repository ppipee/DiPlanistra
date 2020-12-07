import { ReactElement } from 'react'

import { CheckboxProps } from 'common/components/Checkbox/styled'
import { GapType } from 'common/components/Gap/types'

export interface CheckboxGroupProps {
	type?: GapType
	children: ReactElement<CheckboxProps & { value: string }>[]
	onChange: (value: string, values?: string[]) => void
	values: string[]
	withAllSelector?: boolean
	allValue?: string
}
