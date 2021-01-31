import { useUserStore } from 'modules/user/stores/UserStore/context'

export default function useUser() {
	return useUserStore((store) => store.user)
}
