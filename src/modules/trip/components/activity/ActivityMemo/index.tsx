import React from 'react'

import useI18n from 'core/locale/hooks/useI18n'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { LOCALE_MEMO } from 'common/locale'
import { black, gray } from 'common/styles/colors'
import spaces from 'common/styles/mixins/spaces'

type Props = {
	memo: string
}

const ActivityMemo = ({ memo }: Props) => {
	const I18n = useI18n()

	return (
		<Gap $type="vertical" $size={spaces(4)} $responsive>
			<Text color={black}>{I18n.t(LOCALE_MEMO)}</Text>
			<Text color={gray[700]}>{memo}</Text>
		</Gap>
	)
}

export default ActivityMemo
