export interface User {
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

export type RegisterDataTypes = Omit<LoginDataTypes & User, 'id' | 'role'>
