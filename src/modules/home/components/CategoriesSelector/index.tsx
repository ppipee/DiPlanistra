import React, { useCallback, useState } from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import { DomainValue } from 'common/constants/business'

import { useWelcomeStore } from 'modules/home/stores/WelcomeStore/context'

import CategoriesModal from '../CategoriesModal'

import { SELECT_FAVORITE_CATEGORY_TEXT } from './locale'

type Props = {
	onClose: () => void
}

const CategoriesSelector = ({ onClose }: Props) => {
	const I18n = useI18n()
	const [categoriesSelected, setCategories] = useState<string[]>([])

	const { newCategories } = useWelcomeStore((store) => ({
		newCategories: store.newCategories,
		isLoading: store.isActionLoading['newCategories'],
	}))

	const selectCategory = useCallback(
		(category, oldCategories: string[], categories: string[]) => {
			const newCategories = categoriesSelected.filter((categorySelected) => !oldCategories.includes(categorySelected))

			setCategories([...new Set([...newCategories, ...categories])])
		},
		[categoriesSelected],
	)

	const onCancel = useCallback(() => {
		newCategories([])
		onClose()
	}, [])

	const onConfirm = useCallback(async () => {
		const categories = categoriesSelected.map((category) => Number(category))

		await newCategories(categories)
		onClose()
	}, [categoriesSelected])

	return (
		<CategoriesModal
			title={I18n.t(SELECT_FAVORITE_CATEGORY_TEXT)}
			categoriesSelected={categoriesSelected}
			selectCategory={selectCategory}
			onCancel={onCancel}
			onConfirm={onConfirm}
			domain={DomainValue.ATTRACTION}
		/>
	)
}

export default CategoriesSelector
