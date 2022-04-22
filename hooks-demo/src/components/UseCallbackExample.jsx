import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
	const [tasks, setTasks] = useState([])

	let numberOfTask = 0

	// const addTask = () => {
	// 	numberOfTask++
	// 	setTasks((prevState) => [...prevState, `Some Task ${numberOfTask}`])
	// }

	const addTask = useCallback(() => {
		numberOfTask++
		setTasks((prevState) => [...prevState, `Some Task ${numberOfTask}`])
	}, [setTasks, numberOfTask])

	console.log('Example Rendered')

	return (
		<div className='m-4'>
			<Button addTask={addTask} />
			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</div>
	)
}

const Button = React.memo(({ addTask }) => {
	console.log('Button rendered')

	return (
		<div>
			<button onClick={addTask} className='btn btn-primary'>
				Add Task
			</button>
		</div>
	)
})

export default UseCallbackExample
