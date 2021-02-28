import React, { useEffect } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import asRoute from 'core/router/hoc/asRoute'

import Modal from 'common/components/modal/Modal'
import { LOCALE_CLOSE, LOCALE_CONFIRM } from 'common/locale'
import { Spaces } from 'common/styles/mixins/spaces'

import SearchPlaceStoreConfig from 'modules/search/stores/SearchPlaceStore'
import { useSearchPlaceStore } from 'modules/search/stores/SearchPlaceStore/context'

import CategoriesGroup from './components/CategoriesGroup'
import CategoriesContext from './context'
import { CategoriesGroupsContainer } from './styled'
import { CategoriesModalProps } from './types'

const MODAL_WIDTH = '680px'

const CategoriesModal = ({
	title,
	selectCategory,
	categoriesSelected,
	domain,
	onConfirm,
	onCancel,
}: CategoriesModalProps) => {
	const I18n = useI18n()
	const { categories, isCategoriesLoading, getCategories } = useSearchPlaceStore((store) => ({
		categories: store.categories,
		isCategoriesLoading: store.isActionLoading['getCategories'],
		getCategories: store.getCategories,
	}))

	useEffect(() => {
		getCategories(domain)
	}, [])

	return (
		<CategoriesContext.Provider value={{ categoriesSelected, selectCategory }}>
			<Modal
				width={MODAL_WIDTH}
				title={title}
				closeByOverlay
				onConfirm={onConfirm}
				onCancel={onCancel}
				cancelText={I18n.t(LOCALE_CLOSE)}
				confirmText={I18n.t(LOCALE_CONFIRM)}
			>
				<CategoriesGroupsContainer $type="vertical" $size={Spaces[12]}>
					{!isCategoriesLoading &&
						categories &&
						categories.map((category) => <CategoriesGroup key={`category-modal-${category.id}`} category={category} />)}
				</CategoriesGroupsContainer>
			</Modal>
		</CategoriesContext.Provider>
	)
}

export default asRoute(CategoriesModal, { stores: { searchPlaceStore: SearchPlaceStoreConfig } })
