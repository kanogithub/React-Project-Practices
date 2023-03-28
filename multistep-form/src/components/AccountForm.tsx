import FomrWrapper from './FomrWrapper'

interface AccountProps {
	email: string
	password: string
}

interface FormProps extends AccountProps {
	updateFields: (field: Partial<AccountProps>) => void
}

const AccountForm = ({ email, password, updateFields }: FormProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({ [e.target.name]: e.target.value })
	}

	return (
		<FomrWrapper title='User Details'>
			<label htmlFor='email'>Email</label>
			<input
				type='text'
				id='email'
				name='email'
				value={email}
				autoFocus
				required
				onChange={handleChange}
			/>
			<label htmlFor='password'>Password</label>
			<input
				type='password'
				id='password'
				name='password'
				value={password}
				required
				onChange={handleChange}
			/>
		</FomrWrapper>
	)
}

export default AccountForm
