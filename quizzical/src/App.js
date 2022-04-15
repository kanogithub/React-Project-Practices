import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import './App.css'

function App() {
	return (
		<div className='app-frame'>
			<div className='background-layout'>
				<div className='lemon'></div>
				<div className='baby'></div>
			</div>
			<div className='quiz-layout'>
				<Router>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/quiz' element={<Quiz />}></Route>
					</Routes>
				</Router>
			</div>
		</div>
	)
}

export default App
