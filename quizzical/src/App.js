import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizProvider from './context/QuizContext'
import SpinnerProvider from './context/SpinnerContext'
import SpinnerLayout from './components/SpinnerLayout'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import './App.css'

function App() {
	return (
		<QuizProvider>
			<SpinnerProvider>
				<div className='app-frame'>
					<SpinnerLayout />
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
			</SpinnerProvider>
		</QuizProvider>
	)
}

export default App
