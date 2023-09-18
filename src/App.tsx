import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"

const App = () => {
	return (
		<BrowserRouter>
			<Sidebar/>
			<Navbar/>
			<AppRoutes/>
		</BrowserRouter>
	)
}

export default App