import { configure } from 'mobx'

export default function initApp() {
	configure({
		enforceActions: 'observed',
	})
}
