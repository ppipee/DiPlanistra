import { Category } from 'common/types/wongnai/business'

export default function getCategoryTag(categories?: Category[]) {
	if (!categories) return null

	return categories.map((category) => category.name)
}
