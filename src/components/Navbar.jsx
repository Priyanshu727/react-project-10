import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"
import { FaStaylinked } from "react-icons/fa6"

const Navbar = () => {
	return (
		<nav className="">
			<Link to="/assignment-10">
				Assignment-10 <br />
				<FaStaylinked />
			</Link>
		</nav>
	)
}

export default Navbar
