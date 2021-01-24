import React from 'react'

import Button from 'common/components/Button'
import Gap from 'common/components/Gap'
import { FACEBOOK_COLOR } from 'common/styles/constants'
import spaces from 'common/styles/mixins/spaces'

const ThirdPartyLogin = () => {
	return (
		<Gap $type="vertical" $size={spaces(12)}>
			<Button $color={FACEBOOK_COLOR} $border="curve" $responsive>
				Login with Facebook
			</Button>
		</Gap>
	)
}

export default ThirdPartyLogin
