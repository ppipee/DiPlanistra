import { useCallback, useState } from 'react'

export default function useHandleCheckbox(
	defaultValue: string[],
	actions: ((value: string, values?: string[]) => void)[] = [],
	allValue?: string,
) {
	const [checkboxValues, setValue] = useState(defaultValue)

	const handleCheckbox = useCallback(
		(value: string, values: string[]) => {
			if (allValue && (value === allValue || [...checkboxValues, value].length === values.length)) {
				if (checkboxValues.includes(allValue)) {
					// uncheck all value
					setValue([])
					actions.map((action) => action(allValue, []))
				} else {
					setValue([allValue])
					actions.map((action) => action(allValue, values))
				}
			} else {
				let newValues: string[]
				if (checkboxValues.includes(allValue)) {
					// after checked all
					newValues = [value]
				} else if (checkboxValues.includes(value)) {
					// unchecked
					const valueIndex = checkboxValues.indexOf(value)
					newValues = [...checkboxValues]
					newValues.splice(valueIndex, 1)
				} else {
					newValues = [...checkboxValues, value]
				}

				setValue(newValues)
				actions.map((action) => action(value, newValues))
			}
		},
		[checkboxValues, ...actions],
	)

	return { checkboxValues, setValue, onChange: handleCheckbox }
}
