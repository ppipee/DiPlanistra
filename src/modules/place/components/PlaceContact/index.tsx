import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import EmailIcon from 'common/components/icons/EmailIcon'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import InstagramIcon from 'common/components/icons/InstagramIcon'
import LineIcon from 'common/components/icons/LineIcon'
import PhoneIcon from 'common/components/icons/PhoneIcon'
import TwitterIcon from 'common/components/icons/TwitterIcon'
import ResponsiveBlock from 'common/components/ResponsiveBlock'
import Text from 'common/components/Text'
import { gray, green, main, yellow } from 'common/styles/colors'
import useFontSizeResponsive from 'common/styles/hooks/useFontSizeResponsive'
import spaces from 'common/styles/mixins/spaces'

import { usePlaceStore } from 'modules/place/stores/PlaceStore/context'

import { CONTACT_TITLE } from './locale'

const ICON_SIZE = 24
const SOCIAL_ICON_SIZE = 52

const PlaceContact = () => {
	const I18n = useI18n()
	const { titleSize, detailSize } = useFontSizeResponsive()
	const place = usePlaceStore((store) => store.place)

	const contact = place.contact

	return (
		<ResponsiveBlock $padding={spaces(16)} $paddingMobile={spaces(12)}>
			<Gap $type="vertical" $size={spaces(16)}>
				<Gap $type="vertical" $size={spaces(8)}>
					<Text size={titleSize}>{I18n.t(CONTACT_TITLE)}</Text>
					<Text size={detailSize}>
						<Gap $type="vertical" $size={spaces(4)}>
							<Gap $size={spaces(4)} $alignCenter>
								<PhoneIcon size={ICON_SIZE} color={gray[500]} />
								<span>{contact.phoneno}</span>
							</Gap>
							{contact.email && (
								<Gap $size={spaces(4)} $alignCenter>
									<EmailIcon size={ICON_SIZE} color={yellow[500]} />
									<span>{contact.email}</span>
								</Gap>
							)}
							{contact.line && (
								<Gap $size={spaces(4)} $alignCenter>
									<LineIcon size={ICON_SIZE} color={green[500]} />
									<span>{contact.line}</span>
								</Gap>
							)}
						</Gap>
					</Text>
				</Gap>
				<Gap $size={spaces(12)} $justifyCenter>
					{contact.facebookHomepage && (
						<a href={contact.facebookHomepage}>
							<FacebookIcon size={SOCIAL_ICON_SIZE} color={main[500]} secondColor={main[300]} />
						</a>
					)}
					{contact.instagram && (
						<a href={contact.instagram}>
							<InstagramIcon size={SOCIAL_ICON_SIZE} color={main[500]} secondColor={main[300]} />
						</a>
					)}
					{contact.twitter && (
						<a href={contact.twitter}>
							<TwitterIcon size={SOCIAL_ICON_SIZE} color={main[500]} secondColor={main[300]} />
						</a>
					)}
				</Gap>
			</Gap>
		</ResponsiveBlock>
	)
}

export default PlaceContact
