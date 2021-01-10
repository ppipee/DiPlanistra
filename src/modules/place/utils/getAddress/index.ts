import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

import { Contact } from 'modules/place/types/place'

const getAddress = ({ address }: Contact) => {
	if (!address) return null

	let fullAddress = filterArrayExistingValue([
		address.street,
		address.subDistrict?.name,
		address.district?.name,
		address.city?.name,
	]).join(', ')

	if (address.hint) {
		fullAddress += ` (${address.hint})`
	}

	return fullAddress
}

export default getAddress
