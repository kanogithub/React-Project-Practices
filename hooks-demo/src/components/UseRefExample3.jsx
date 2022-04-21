import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
	// useRef can used to fix memory leak when element unmounted
	// the variable of useRef save at global, we can use it in useEffect return function
	// which is represented as DidUnmounted
	// So, every action must be actived when component is mounted.
	// Otherwise do nothing.
	// This way can prevent update some value to unmount component

	const [showTodo, setShowTodo] = useState(true)

	return (
		<div className='m-4'>
			{showTodo && <Todo />}
			<button className='btn btn-primary mt-2' onClick={() => setShowTodo((prev) => !prev)}>
				Toggle Show Todo
			</button>
		</div>
	)
}

export default UseRefExample3
