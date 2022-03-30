export default function Dies({ value, isHold, handleClick }) {
	const isBlack = (trueList) => {
		if (trueList.some((number) => number === value)) return 'black'
		return ''
	}

	return (
		<div className={`button diez${isHold ? ' hold' : ''}`} onClick={handleClick}>
			<div className={`marker ${isBlack([2, 3, 4, 5, 6])}`} />
			<div className='marker' />
			<div className={`marker ${isBlack([4, 5, 6])}`} />
			<div className={`marker ${isBlack([6])}`} />
			<div className={`marker ${isBlack([1, 3, 5])}`} />
			<div className={`marker ${isBlack([6])}`} />
			<div className={`marker ${isBlack([4, 5, 6])}`} />
			<div className='marker' />
			<div className={`marker ${isBlack([2, 3, 4, 5, 6])}`} />
		</div>
	)
}
