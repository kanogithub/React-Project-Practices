import useFetch from '../hooks/useFetch'

function CustomHook_useFetch() {
	const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1', {})
	console.log('rendered')
	if (loading) return <h3>Loading...</h3>
	if (error) return <h3>Error: {error}</h3>
	return <h3>{data.title}</h3>
}

export default CustomHook_useFetch
