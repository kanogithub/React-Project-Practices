import { Form } from 'react-bootstrap'

export interface UserInfoProps {
	firstName: string
	lastName: string
	emailAddress: string
}

interface Props extends UserInfoProps {
	onChangeHandler: (data: Partial<UserInfoProps>) => void
}

const UserInfoForm = ({ firstName, lastName, emailAddress, onChangeHandler }: Props) => {
	return (
		<>
			<Form.Group className='mb-3' controlId='formUserFirstName'>
				<Form.Label>First Name*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='First Name'
					value={firstName}
					onChange={(e) => onChangeHandler({ firstName: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formUserLastName'>
				<Form.Label>Last Name*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='Last Name'
					value={lastName}
					onChange={(e) => onChangeHandler({ lastName: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formUserEmailAddress'>
				<Form.Label>Email Address*</Form.Label>
				<Form.Control
					required
					type='email'
					placeholder='Email Address'
					value={emailAddress}
					onChange={(e) => onChangeHandler({ emailAddress: e.target.value })}
				/>
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>
		</>
	)
}

export default UserInfoForm
