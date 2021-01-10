import { Category } from 'modules/place/types/place'

export default function getCategoryTag(categories?: Category[]) {
	if (!categories) return null

	return categories.map((category) => category.name)
}
