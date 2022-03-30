export default function Dies({ value, isHold, handleClick }) {
	return (
		<button className={`diez${isHold ? ' hold' : ''}`} onClick={handleClick}>
			{value}
		</button>
	)
}
