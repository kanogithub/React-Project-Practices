import { Form } from 'react-bootstrap'

export interface UserAddressProps {
	address: string
	city: string
	state: string
	postcode: string
}

interface Props extends UserAddressProps {
	onChangeHandler: (data: Partial<UserAddressProps>) => void
}

const UserAddress = ({ address, city, state, postcode, onChangeHandler }: Props) => {
	return (
		<>
			<Form.Group className='mb-3' controlId='address'>
				<Form.Label>Address*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='Address'
					value={address}
					onChange={(e) => onChangeHandler({ address: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='city'>
				<Form.Label>City*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='City'
					value={city}
					onChange={(e) => onChangeHandler({ city: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='state'>
				<Form.Label>State*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='State'
					value={state}
					onChange={(e) => onChangeHandler({ state: e.target.value })}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='postcode'>
				<Form.Label>Postcode*</Form.Label>
				<Form.Control
					required
					type='text'
					placeholder='Postcode'
					value={postcode}
					onChange={(e) => onChangeHandler({ postcode: e.target.value })}
				/>
			</Form.Group>
		</>
	)
}

export default UserAddress
