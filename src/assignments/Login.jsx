import React, { useState } from "react"
import "./login.css"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
	const [users, setUsers] = useState(JSON.parse(localStorage.getItem("usersData")) || [])
	const [validate, setvalidation] = useState("")
	const navigate = useNavigate()

	const initialValues = {
		email: "",
		password: "",
	}

	const logInSchema = Yup.object({
		email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
		password: Yup.string().min(4).required("Please Enter Your Password"),
	})

	const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
		initialValues: initialValues,
		validationSchema: logInSchema,
		onSubmit: (values, action) => {
			let isUserExist = users.find((x) => x.email == values.email && x.password == values.password)
			if (!isUserExist) {
				setvalidation("Incorrect email or password")
			} else {
				const isLogIn = true
				isUserExist = { ...isUserExist, isLogIn }
				localStorage.setItem("logedUser", JSON.stringify(isUserExist))
				navigate("/Home")
			}
		},
	})

	return (
		<div>
			<div className="container-fluid ps-md-0">
				<div className="row g-0">
					<div className="main">
						<div className="login d-flex align-items-center py-5">
							<div className="container">
								<div className="row">
									<div className="col-md-12 text-center mx-auto">
										<h4 className="login-heading fw-bold mb-4">Log in / Sign up</h4>
										<div className="col-7 mt-3 pt-4 mx-auto ">
											<form onSubmit={handleSubmit}>
												<div className="form-floating mb-3">
													<input
														type="email"
														name="email"
														className={`form-control focus-ring ${errors.email && touched.email ? "border-danger focus-ring-danger " : "border-dark-subtle"}`}
														id="floatingInputlogin"
														placeholder="name@example.com"
														value={values.email}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="floatingInputlogin" className="text-secondary fw-bold">
														Enter Email address
													</label>
													{errors.email && touched.email ? <p className="text-danger text-start">{errors.email}</p> : null}
												</div>
												<div className="form-floating mb-3">
													<input
														type="password"
														name="password"
														className={`form-control focus-ring ${errors.password && touched.password ? "border-danger focus-ring-danger " : "border-dark-subtle"}`}
														id="floatingLoginPassword"
														placeholder="Password"
														value={values.password}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
													<label htmlFor="floatingLoginPassword" className="text-secondary fw-bold">
														{" "}
														Password
													</label>
													{errors.password && touched.password ? <p className="text-danger text-start">{errors.password}</p> : null}
												</div>
												<div className="">
													<p className="text-danger text-start">{validate}</p>
													<button className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium" type="submit">
														Continue
													</button>
												</div>
												<div className="mt-3 fw-medium">
													Don't have an account?
													<Link to={"/signup"}> Sign Up</Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
