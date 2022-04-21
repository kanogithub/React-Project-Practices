import { useMemo } from 'react'
import { useDiesContext } from '../context/DiesContext'
import Dies from './Dies'

function DiesContainer() {
	const { dies, handleHoding } = useDiesContext()
	console.log(useDiesContext())

	return useMemo(() => {
		/** Container */
		// console.log('Dies Container Rendered')

		return (
			<div className='diesContainer flex flex-center flex-column'>
				{dies.map((die, index) => (
					<Dies key={index} {...die} handleClick={() => handleHoding(index)} />
				))}
			</div>
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dies])
}

export default DiesContainer
