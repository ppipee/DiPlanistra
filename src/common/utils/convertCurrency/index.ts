import { BATH } from './locale'

export default function convertCurrency(currency: string) {
	if (currency === '฿') {
		return BATH
	}

	return null
}
