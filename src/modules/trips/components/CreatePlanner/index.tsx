import React from 'react'

import AddIcon from 'common/components/icons/AddIcon'
import useSwitch from 'common/hooks/useSwitch'
import { white } from 'common/styles/colors'

import CreatePlannerModal from '../CreatePlannerModal'

import { CreatePlannerButton } from './styled'

const ICON_SIZE = 44

const CreatePlanner = () => {
	const { isOpen, open, close } = useSwitch()

	return (
		<>
			<CreatePlannerButton $alignItems="center" $justifyContent="center" onClick={open}>
				<AddIcon color={white} size={ICON_SIZE} />
			</CreatePlannerButton>
			{isOpen && <CreatePlannerModal close={close} />}
		</>
	)
}

export default CreatePlanner
