import { useRef } from 'react'

function UseRefExample1() {
	// useRef can
	// get value from DOM element as
	// or directly implement DOM element
	const inputRef = useRef()
	const onSubmit = (e) => {
		e.preventDefault()
		console.log('previous value:', inputRef.current.value)
		console.log('reset input value to Hello')
		inputRef.current.value = 'Hello'
		console.log('set input background color to #dedede')
		inputRef.current.style.backgroundColor = '#dedede'
	}

	return (
		<div className='m-2'>
			<form onSubmit={onSubmit}>
				<label htmlFor='name' className='label'>
					Name
				</label>
				<input
					type='text'
					id='name'
					className='form-control mb-2 input-sm input input-bordered'
					ref={inputRef}
				/>
				<button className='btn btn-sm btn-primary'>Submit</button>
			</form>
			<p onClick={() => inputRef.current.focus()}>hit me to focus</p>
		</div>
	)
}

export default UseRefExample1
