export default function setPrefixToDigi(value: string | number, prefixValue = '0', displayLength = 2) {
	return (prefixValue + value).slice(-displayLength)
}
