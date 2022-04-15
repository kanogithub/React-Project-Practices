function SelectButton({ value, isAnser, selected, handleClick, show }) {
	const buttonStates = () => {
		if (show) {
			if (isAnser) return ' btn-success'
			if (selected) return ' btn-faild'
		}

		return selected ? ' btn-selected' : ''
	}

	return (
		<button className={`quiz-item${buttonStates()}`} onClick={handleClick} disabled={show}>
			{value}
		</button>
	)
}

export default SelectButton
