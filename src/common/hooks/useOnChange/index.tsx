import { useState, ChangeEvent } from 'react'

const useOnChange = (defaultValue: string | number = '', functions?: ((value?: any) => void)[]) => {
	const [keyword, setKeyword] = useState(defaultValue)

	const onChange = ({
		target,
	}: ChangeEvent<HTMLInputElement | HTMLSelectElement | { name?: string | undefined; value: unknown }>) => {
		const value = target.value as string | number
		setKeyword(value)
		functions && functions.forEach(callbackFunction => callbackFunction(value))
	}

	return { keyword, setKeyword, onChange }
}

export default useOnChange
