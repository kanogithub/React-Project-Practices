import { useState, useEffect, useRef, useMemo } from 'react'

function getSqrt(n) {
	for (let i = 0; i <= 10000; i++) {
		console.log(i)
	}

	console.log('Expensive Function Called!')
	return Math.sqrt(n)
}

function UseMemoExample() {
	const [number, setNumber] = useState(1)
	const [inc, setInc] = useState(0)

	const sqrt = useMemo(() => getSqrt(number), [number])
	// const sqrt = getSqrt(number)

	const renders = useRef(1)

	useEffect(() => {
		renders.current = renders.current + 1
	})

	const handleClick = () => {
		setInc((prevState) => prevState + 1)
	}

	return (
		<div className='m-4'>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				className='form-control w-25 input input-bordered input-sm'
			/>
			<h2 className='my-3'>
				The sqrt of {number} is {sqrt}
			</h2>
			<button className='btn btn-primary' onClick={handleClick}>
				Re Render
			</button>
			<h3>Renders: {renders.current}</h3>
		</div>
	)
}

export default UseMemoExample
