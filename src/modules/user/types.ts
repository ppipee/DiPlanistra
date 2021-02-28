import { ActivityPlace } from 'modules/trip/types/planner'

export interface User extends BaseUser {
	favoritePlaces?: ActivityPlace[] // should be string but make the DDOS to target server
	events?: string[]
	bookmark?: string[]
	placeCategories?: number[]
}

export interface BaseUser {
	id: string
	name: string
	email: string
	role: Role
}

export enum Role {
	Traveler = 'traveler',
	Admin = 'admin',
}

export interface LoginDataTypes {
	email: string
	password: string
}

export type RegisterDataTypes = Omit<LoginDataTypes & BaseUser, 'id' | 'role'>
