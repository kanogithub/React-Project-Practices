import FomrWrapper from './FomrWrapper'

interface UserProps {
	firstName: string
	lastName: string
	age: string
}

interface FormProps extends UserProps {
	updateFields: (fields: Partial<UserProps>) => void
}

const UserForm = ({ firstName, lastName, age, updateFields }: FormProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({ [e.target.name]: e.target.value })
	}

	return (
		<FomrWrapper title='Account Info'>
			<label htmlFor='firstname'>First Name</label>
			<input
				autoFocus
				required
				id='firstname'
				value={firstName}
				name='firstName'
				type='text'
				onChange={handleChange}
			/>
			<label htmlFor='lastname'>Last Name</label>
			<input
				required
				id='lastname'
				value={lastName}
				name='lastName'
				type='text'
				onChange={handleChange}
			/>
			<label htmlFor='age'>Age</label>
			<input required id='age' value={age} name='age' type='number' onChange={handleChange} />
		</FomrWrapper>
	)
}

export default UserForm
