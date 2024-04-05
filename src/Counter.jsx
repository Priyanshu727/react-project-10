import React from "react"
import { useSelector } from "react-redux"

const Counter = () => {
	const state = useSelector((state) => state.count)
	return (
		<div>
			<h1>Counter...{state}</h1>
			<div className="">Increment</div>
		</div>
	)
}

export default Counter
