import { useEffect, useState, useRef } from 'react'

function Todo() {
	const [loading, setLoading] = useState(true)
	const [todo, setTodo] = useState({})
	const isMounted = useRef(true)

	useEffect(() => {
		isMounted.current &&
			fetch('https://jsonplaceholder.typicode.com/todos/1')
				.then((result) => result.json())
				.then((data) =>
					setTimeout(() => {
						setTodo(data)
						setLoading(false)
					}, 3000)
				)
		return () => (isMounted.current = false)
	}, [])

	return loading ? <h1>Loading...</h1> : <h2>{todo.title}</h2>
}

export default Todo
