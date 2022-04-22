import UseCallbackExample from './components/UseCallbackExample'

function App() {
	// useCallback memorize function for components
	// so React does not re-render the components
	// the variable stored in function also can be memorized

	return (
		<div className='container mt-5'>
			<UseCallbackExample />
		</div>
	)
}

export default App
