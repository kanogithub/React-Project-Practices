import { useState, useEffect } from 'react'

function useFetch(url, options) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	useEffect(() => {
		const delay = (time) => {
			return new Promise((resolve) =>
				setTimeout(() => {
					resolve()
				}, time)
			)
		}

		const fetchData = async () => {
			await delay(2000)

			try {
				const response = await fetch(url, options)
				const json = await response.json()

				setData(json)
				setLoading(false)
			} catch (err) {
				setError(err)
				setLoading(false)
			}
		}

		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { data, loading, error }
}

export default useFetch
