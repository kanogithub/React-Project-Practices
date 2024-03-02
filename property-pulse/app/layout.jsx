import '@/assets/styles/globals.css'

export const metadata = {
	title: 'PropertyPulse | Find The Perfect Tental',
	description: 'Find Your Dream Rental  Property',
	keywords: ['rental', 'find rental', 'find properties'],
}

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}

export default MainLayout
