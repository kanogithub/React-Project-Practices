import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
	// useRef can be used in useEffect to store previous value
	const [name, setName] = useState('')
	const renders = useRef(1)
	const prevName = useRef()

	useEffect(() => {
		renders.current = renders.current + 1
		prevName.current = name
	}, [name])

	return (
		<div className='m-5'>
			<h1>Renders: {renders.current}</h1>
			<h2>Pre Name State: {prevName.current}</h2>
			<h2>Current Name State: {name}</h2>
			<input
				type='text'
				value={name}
				className='form-control mb-3 input input-bordered input-sm'
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	)
}

export default UseRefExample2
