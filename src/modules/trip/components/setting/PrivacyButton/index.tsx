import React from 'react'

import Switch from 'common/components/Switch'

import usePlannerPrivacy from 'modules/trip/hooks/usePlannerPrivacy'

const PrivacyButton = () => {
	const { setPublic, setPrivate, isPublic } = usePlannerPrivacy()

	return <Switch onEnable={setPublic} onDisable={setPrivate} defaultValue={isPublic} />
}

export default PrivacyButton
