import useLocalStorage from '../hooks/useLocalStorage'

function CustomHook_useLocalStorage() {
	const [task, setTask] = useLocalStorage('task', '')
	const [tasks, setTasks] = useLocalStorage('tasks', [])

	const onSubmit = (e) => {
		e.preventDefault()

		const taskObj = {
			task,
			completed: false,
			date: new Date().toLocaleDateString(),
		}

		setTasks([...tasks, taskObj])
	}

	return (
		<div className='m-4'>
			<form onSubmit={onSubmit} className='w-25'>
				<div className='mb-3'>
					<label htmlFor='taskInput' className='form-label'>
						Task
					</label>
					<input
						id='taskInput'
						type='text'
						className='form-control input input-sm input-bordered'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
			<div className='my-4'>
				{tasks.map((task) => (
					<h3 key={task.date}>{task.task}</h3>
				))}
			</div>
		</div>
	)
}

export default CustomHook_useLocalStorage
