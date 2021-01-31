import * as yup from 'yup'

export const registerValidateSchema = yup.object().shape({
	email: yup.string().required('Email is required.'),
	name: yup.string().required('Name is required.'),
	password: yup.string().required('Password is required.'),
})
