import { useState } from 'react'
import useMultipleForm from './hooks/useMultipleForm'
import MultiFormLayout from './layouts/MultiFormLayout'
// react bootstrap form elements
import { Button, Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// custom forms
import UserInfoForm, { UserInfoProps } from './components/UserInfoForm'
import UserAddress, { UserAddressProps } from './components/UserAddress'
import UserSocialLink, { UserSocialLinkProps } from './components/UserSocialLink'

interface FormDataProps extends UserInfoProps, UserAddressProps, UserSocialLinkProps {}

function App() {
	const [userData, setUserData] = useState<FormDataProps>({
		firstName: '',
		lastName: '',
		emailAddress: '',
		address: '',
		city: '',
		state: '',
		postcode: '',
		facebookLink: '',
		twitterLink: '',
		linkedInLink: '',
	})
	const TotalSteps: number = 3 as const
	const { next, back, currentIndex, isLastPage } = useMultipleForm(TotalSteps)
	const handleChange = (inputData: Partial<FormDataProps>) => {
		setUserData((prev) => ({ ...prev, ...inputData }))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!isLastPage) {
			next()
			return
		}

		console.log(userData)
	}

	return (
		<Container className='m-3' fluid={true}>
			<Row md={4}>
				<Form
					className='m-3 p-3'
					style={{ border: '1px solid grey', borderRadius: '5px' }}
					onSubmit={handleSubmit}>
					<div style={{ textAlign: 'end' }}>
						{currentIndex + 1} / {TotalSteps}
					</div>
					<div style={{ minHeight: '18rem' }}>
						<MultiFormLayout currentIndex={currentIndex}>
							<UserInfoForm {...userData} onChangeHandler={handleChange} />
							<UserAddress {...userData} onChangeHandler={handleChange} />
							<UserSocialLink {...userData} onChangeHandler={handleChange} />
						</MultiFormLayout>
					</div>
					<div style={{ display: 'flex', justifyContent: 'end' }}>
						<Button
							variant='outline-secondary'
							className='m-2'
							onClick={back}
							disabled={currentIndex === 0}>
							Back
						</Button>
						<Button type='submit' variant='outline-secondary' className='my-2'>
							{isLastPage ? 'Finish' : 'Next'}
						</Button>
					</div>
				</Form>
			</Row>
		</Container>
	)
}

export default App
