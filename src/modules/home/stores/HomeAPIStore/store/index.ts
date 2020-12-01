import axios from 'axios'

export default class HomeApiStore {
	getHighlightPlace() {
		return axios.get('www.wongnai.com/attraction.json')
	}
}
