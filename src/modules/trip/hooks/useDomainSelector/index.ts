import { useActivityStore } from 'modules/trip/stores/ActivityStore/context'

export default function useDomainSelector() {
	return useActivityStore((store) => ({ domain: store.domain, setDomain: store.setDomain }))
}
