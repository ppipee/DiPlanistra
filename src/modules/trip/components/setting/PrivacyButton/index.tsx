import React from 'react'

import LockIcon from 'common/components/icons/LockIcon'
import UnlockIcon from 'common/components/icons/UnlockIcon'
import Switch from 'common/components/Switch'

import usePlannerPrivacy from 'modules/trip/hooks/usePlannerPrivacy'

const PrivacyButton = () => {
	const { setPublic, setPrivate, isPublic } = usePlannerPrivacy()

	return (
		<Switch
			onEnable={setPublic}
			onDisable={setPrivate}
			defaultValue={isPublic}
			enabledIcon={UnlockIcon}
			disabledIcon={LockIcon}
		/>
	)
}

export default PrivacyButton
