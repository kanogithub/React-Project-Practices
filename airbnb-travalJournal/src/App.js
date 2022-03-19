import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Travel from './pages/Travel'
import Experiences from './pages/Experiences'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Travel />}></Route>
					<Route path='/exper' element={<Experiences />}></Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
