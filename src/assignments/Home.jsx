import React from "react"
import img1 from "../assets/images/1.jpg"
import { Link } from "react-router-dom"
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';


const Home = () => {
	return <>
		<section>
			<div className="container">
				<div className="btn btn-outline-light mt-5">
					<Link to={'/'}>Logout</Link>
				</div>
				<div className="d-flex justify-content-center align-items-center">

					<div className="col-6">
						<div className="cont">
							<h1>Hello Priyanshu</h1>
							<p className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo, mollitia, quis aperiam ut laudantium nulla sunt numquam consectetur blanditiis minus nam laboriosam soluta magni eius nisi labore recusandae similique?</p>
						</div>
					</div>
					<div className="col-6 mt-5">
						<div className="cont-img rounded-circle overflow-hidden">
							<div className="img-bord ">
								<img src={img1} alt="" width="350px" height="500px" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>


}

export default Home
