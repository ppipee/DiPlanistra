import React, { HTMLAttributes, ReactNode } from 'react'

import useI18n from 'core/locale/hooks/useI18n'
import useQuery from 'core/router/hooks/useQuery'

import Gap from 'common/components/Gap'
import ShareIcon from 'common/components/icons/ShareIcon'
import UserIcon from 'common/components/icons/UserIcon'
import Text from 'common/components/Text'
import fontSizes from 'common/styles/mixins/fontSizes'
import { Spaces } from 'common/styles/mixins/spaces'

import { TripCategory } from 'modules/trip/constants'

import { MY_TRIP, SOCIAL_TRIP } from './locale'
import { Tabs } from './styled'

const ICON_SIZE = 24

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
	children: ReactNode
}

const TripTabs = ({ children, ...props }: Props) => {
	const I18n = useI18n()
	const { trip = TripCategory.MyTrip } = useQuery()

	const tabs = [
		{
			tab: (
				<Gap $size={Spaces[4]}>
					<UserIcon size={ICON_SIZE} />
					<Text size={fontSizes(16)}>{I18n.t(MY_TRIP)}</Text>
				</Gap>
			),
			value: TripCategory.MyTrip,
		},
		{
			tab: (
				<Gap $size={Spaces[4]}>
					<ShareIcon size={ICON_SIZE} />
					<Text size={fontSizes(16)}>{I18n.t(SOCIAL_TRIP)}</Text>
				</Gap>
			),
			value: TripCategory.SocialTrip,
		},
	]

	const categoryMapper = {
		[TripCategory.MyTrip]: 0,
		[TripCategory.SocialTrip]: 1,
	}

	return (
		<Tabs tabs={tabs} defaultValue={categoryMapper[trip]} {...props}>
			{children}
		</Tabs>
	)
}

export default TripTabs
