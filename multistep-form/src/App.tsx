import { FormEvent, useState } from 'react'
import AccountForm from './components/AccountForm'
import AddressForm from './components/AddressForm'
import UserForm from './components/UserForm'
import useMultistepForm from './hooks/useMultistepFrom'

type FormData = {
	firstName: string
	lastName: string
	age: string
	street: string
	city: string
	state: string
	zip: string
	email: string
	password: string
}

const initialData: FormData = {
	firstName: '',
	lastName: '',
	age: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	email: '',
	password: '',
}

function App() {
	const [data, setData] = useState(initialData)
	const updateField = (fields: Partial<FormData>) => {
		setData((prev) => {
			return { ...prev, ...fields }
		})
	}

	const {
		step,
		isLastStep,
		totalSteps,
		currnetStepIndex: currestStepIndex,
		next,
		back,
	} = useMultistepForm([
		<UserForm {...data} updateFields={updateField} />,
		<AddressForm {...data} updateFields={updateField} />,
		<AccountForm {...data} updateFields={updateField} />,
	])

	const onFomrSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (!isLastStep) next()
		else alert('Finish')
	}

	return (
		<div
			style={{
				position: 'relative',
				background: 'white',
				border: '1px solid black',
				padding: '2rem',
				margin: '1rem',
				borderRadius: '.5rem',
				fontFamily: 'Arial',
				width: '20rem',
			}}>
			<form onSubmit={onFomrSubmit}>
				<div
					style={{
						position: 'absolute',
						top: '.5rem',
						right: '.5rem',
					}}>
					{currestStepIndex + 1} / {totalSteps}
				</div>
				{/* Elements Here */}
				{step}
				<div
					style={{
						marginTop: '1rem',
						display: 'flex',
						gap: '.5rem',
						justifyContent: 'flex-end',
					}}>
					<button
						type='button'
						onClick={back}
						disabled={currestStepIndex === 0 ? true : false}>
						Back
					</button>
					<button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
				</div>
			</form>
		</div>
	)
}

export default App
