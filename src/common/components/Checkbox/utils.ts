import { gray, main } from 'common/styles/colors'

export const getInputColorState = (disabled?: boolean, checked?: boolean) => {
	if (disabled) {
		return gray[200]
	} else if (checked) {
		return main[500]
	} else {
		return gray[700]
	}
}
