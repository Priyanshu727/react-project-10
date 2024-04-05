import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import App1 from "./assignments/App1"
import Login from "./assignments/Login"
import Signup from "./assignments/Signup"
import Home from "./assignments/Home"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/App1" element={<App1 />} />
				<Route path="/home" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	)
}

export default App
