import UseMemoExample from './components/UseMemoExample'

function App() {
	// useMemo have 2 parameters callback, [dependence array],
	// regard to dependence array return the value before without call expensive function again
	// to imporve performance

	return (
		<div className='container mt-5'>
			<UseMemoExample />
		</div>
	)
}

export default App
