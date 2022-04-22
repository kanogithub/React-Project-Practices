import { useState } from 'react'

const getLocalStorageValue = (key, initValue) => {
	const itemFromStorage = localStorage.getItem(key)
	return itemFromStorage ? JSON.parse(itemFromStorage) : initValue
}

function useLocalStorage(key, initialValue) {
	const [localStorageValue, setLocalStorageValue] = useState(() =>
		getLocalStorageValue(key, initialValue)
	)

	const setValue = (value) => {
		// check if function
		const valueToStore = value instanceof Function ? value(localStorageValue) : value
		// Set to state
		setLocalStorageValue(value)
		// Set to local storage
		localStorage.setItem(key, JSON.stringify(valueToStore))
	}

	return [localStorageValue, setValue]
}

export default useLocalStorage
