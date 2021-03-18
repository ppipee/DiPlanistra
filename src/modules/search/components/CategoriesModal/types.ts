import { DomainValue } from 'common/constants/business'

export interface CategoriesContextProps {
	categoriesSelected: string[]
	selectCategory: (category: string, oldCategories: string[], categories: string[]) => void
}

export interface CategoriesModalProps extends CategoriesContextProps {
	title: string
	domain: DomainValue
	onCancel: () => void
	onConfirm: () => void
}
