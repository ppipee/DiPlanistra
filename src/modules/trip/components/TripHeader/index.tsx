import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useLocale from 'core/locale/hooks/useLocale'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { white } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import useResponsive from 'common/styles/hooks/useResponsive'
import spaces from 'common/styles/mixins/spaces'
import getDateTimeFormat from 'common/utils/datetime/getDateTimeFormat'

import { LOCALE_SHARE, LOCALE_VIEW } from 'modules/search/locale'
import { usePlannerStore } from 'modules/trip/stores/PlannerStore/context'

import EditTripButton from '../setting/EditTripButton'
import PrivacyButton from '../setting/PrivacyButton'
import SharingButton from '../setting/SharingButton'

import { ControllerContainer } from './styled'

const DATE_FORMAT = 'D MMM YYYY'

const TripHeader = () => {
	const locale = useLocale()
	const I18n = useI18n()
	const { isDesktop } = useResponsive()

	const planner = usePlannerStore((store) => store.planner)
	const { largeSize, titleSize, detailSize } = useFontSizeResponsive()

	const startDate = getDateTimeFormat(planner.startDate, locale, DATE_FORMAT)
	const endDate = getDateTimeFormat(planner.endDate, locale, DATE_FORMAT)

	const displayDateRange = `${startDate} - ${endDate}`

	return (
		<Gap $type="vertical" $size={spaces(48)} $alignItems="stretch">
			<ControllerContainer $justifyContent={planner.isOwner ? 'space-between' : 'flex-end'}>
				{planner.isOwner && <PrivacyButton />}
				<Gap $size={spaces(4)}>
					{planner.isOwner && <EditTripButton />}
					<SharingButton />
				</Gap>
			</ControllerContainer>
			<Gap
				$size={spaces(4)}
				$type={isDesktop ? 'horizontal' : 'vertical'}
				$justifyContent="space-between"
				$alignItems={isDesktop ? 'flex-end' : 'flex-start'}
			>
				<Gap $type="vertical" $size={spaces(4)}>
					<Text color={white} size={largeSize}>
						{planner.name}
					</Text>
					<Text color={white} size={titleSize}>
						{displayDateRange}
					</Text>
				</Gap>
				{planner.isPublic && (
					<Text as="div" color={white} size={detailSize}>
						<Gap $size={spaces(8)}>
							{planner.numberOfViews > 0 && <span>{I18n.t(LOCALE_VIEW, { view: planner.numberOfViews })}</span>}
							{planner.numberOfBookmarks > 0 && (
								<span>{I18n.t(LOCALE_SHARE, { share: planner.numberOfBookmarks })}</span>
							)}
						</Gap>
					</Text>
				)}
			</Gap>
		</Gap>
	)
}

export default TripHeader
