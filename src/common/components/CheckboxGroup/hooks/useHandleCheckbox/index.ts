import { useCallback, useEffect, useState } from 'react'

export default function useHandleCheckbox(
	defaultValue: string[],
	actions: ((value: string, oldValue: string[], values?: string[]) => void)[] = [],
	allValue?: string,
) {
	const [checkboxValues, setValue] = useState(defaultValue)

	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	useEffect(() => {
		return () => {
			setValue([])
		}
	}, [])

	const handleCheckbox = useCallback(
		(value: string, values: string[]) => {
			const allValueState = allValue ? [allValue] : values

			if (allValue && (value === allValue || [...checkboxValues, value].length - 1 === values.length)) {
				// values-1 cuz values includes all value

				if (checkboxValues.includes(allValue)) {
					// uncheck all value
					actions.map((action) => action(allValue, allValueState, []))
					setValue([])
				} else {
					// check all value
					actions.map((action) => action(allValue, checkboxValues, allValueState))
					setValue([allValue])
				}
			} else {
				let newValues: string[]
				let oldValues: string[]

				if (checkboxValues.includes(allValue)) {
					// after checked all
					newValues = [value]
					oldValues = allValueState
				} else if (checkboxValues.includes(value)) {
					// unchecked
					const valueIndex = checkboxValues.indexOf(value)
					newValues = [...checkboxValues]
					newValues.splice(valueIndex, 1)
				} else {
					newValues = [...checkboxValues, value]
				}

				actions.map((action) => action(value, oldValues || checkboxValues, newValues))
				setValue(newValues)
			}
		},
		[checkboxValues, ...actions],
	)

	return { checkboxValues, setValue, onChange: handleCheckbox }
}
