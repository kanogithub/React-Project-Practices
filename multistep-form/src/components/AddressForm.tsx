import FomrWrapper from './FomrWrapper'

interface AddressProps {
	street: string
	city: string
	state: string
	zip: string
}

interface FormProps extends AddressProps {
	updateFields: (field: Partial<AddressProps>) => void
}

const AddressForm = ({ street, city, state, zip, updateFields }: FormProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateFields({ [e.target.name]: e.target.value })
	}

	return (
		<FomrWrapper title='Address Info'>
			<label htmlFor='street'>Street</label>
			<input
				autoFocus
				required
				type='text'
				id='street'
				name='street'
				value={street}
				onChange={handleChange}
			/>
			<label htmlFor='city'>City</label>
			<input
				required
				type='text'
				id='city'
				name='city'
				value={city}
				onChange={handleChange}
			/>
			<label htmlFor='state'>State</label>
			<input
				required
				type='text'
				id='state'
				name='state'
				value={state}
				onChange={handleChange}
			/>
			<label htmlFor='zip'>Zip</label>
			<input required type='text' id='zip' name='zip' value={zip} onChange={handleChange} />
		</FomrWrapper>
	)
}

export default AddressForm
