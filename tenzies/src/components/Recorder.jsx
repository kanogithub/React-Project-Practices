import { useMemo } from 'react'
import { useDiesContext } from '../context/DiesContext'

function Recorder() {
	const { bestRecord } = useDiesContext()

	return useMemo(() => {
		/** Recorder */
		console.log('Recorder Rendered')

		return <div className='recorder'>Best Record: {bestRecord}</div>
	}, [bestRecord])
}

export default Recorder
