import { useSpinnerContext } from '../context/SpinnerContext'

function SpinnerLayout() {
	const { loading } = useSpinnerContext()

	return loading && <div className='spinner-layout'></div>
}

export default SpinnerLayout
