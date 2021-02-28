import { DomainValue } from 'common/constants/business'

export interface CategoriesContextProps {
	title: string
	categoriesSelected?: number[]
	selectCategory: (category: number) => void
}

export interface CategoriesModalProps extends CategoriesContextProps {
	domain: DomainValue
}
