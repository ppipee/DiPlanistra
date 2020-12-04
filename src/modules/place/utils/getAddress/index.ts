import { Contact } from 'common/types/wongnai/business'
import filterArrayExistingValue from 'common/utils/filterArrayExistingValue'

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
