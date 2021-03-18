import { action, observable } from 'mobx'

class CategoryModalStore {
	@observable
	isOpen = false

	@action.bound
	open() {
		this.isOpen = true
	}

	@action.bound
	close() {
		this.isOpen = false
	}

	@action
	onUnMount() {
		this.isOpen = false
	}
}

export default CategoryModalStore
