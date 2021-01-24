import yup from 'yup'

const loginValidateSchema = yup.object().shape({
	username: yup.string().required('This field is required.'),
	password: yup.string().required('This field is required.'),
})

export default loginValidateSchema
