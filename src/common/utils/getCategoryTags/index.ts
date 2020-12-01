import { Category } from 'common/types/wongnai'

export default function getCategoryTag(categories?: Category[]) {
	if (!categories) return null

	return categories.map((category) => category.name)
}
