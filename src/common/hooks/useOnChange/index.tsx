import { useState, ChangeEvent } from 'react'

const useOnChange = (defaultValue: string = '', functions?: ((value?: string) => void)[]) => {
	const [keyword, setKeyword] = useState(defaultValue)

	const onChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const value = target.value
		setKeyword(value)
		functions && functions.forEach((callbackFunction) => callbackFunction(value))
	}

	return { keyword, setKeyword, onChange }
}

export default useOnChange
