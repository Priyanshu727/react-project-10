import React, { useState } from "react"
import "./login.css"
import { Formik, useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
	const [usersData, setUsersData] = useState(JSON.parse(localStorage.getItem("usersData")) || [])

	const navigate = useNavigate()

	const initialValues = {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	}

	const signUpSchema = Yup.object({
		username: Yup.string().min(3).max(18).required("Please Enter Your Name"),
		email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
		password: Yup.string().min(4).required("Please Enter Your Password"),
		confirmPassword: Yup.string()
			.required("Please Enter Your Confirm Password")
			.oneOf([Yup.ref("password"), null], "Password must Match"),
	})

	const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
		initialValues: initialValues,
		validationSchema: signUpSchema,
		onSubmit: (values, action) => {
			setUsersData([...usersData, values])
			localStorage.setItem("usersData", JSON.stringify([...usersData, values]))
			action.resetForm()
			navigate("/")
		},
	})

	return (
		<div>
			<div className="container-fluid ps-md-0">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center mx-auto">
							<h4 className="login-heading fw-bold mb-4">Sign up</h4>
							<div className="col-7 mt-5 mx-auto ">
								<form onSubmit={handleSubmit}>
									<div className="form-floating mb-3">
										<input
											type="text"
											name="username"
											className={`form-control focus-ring ${errors.username && touched.username ? "border-danger focus-ring-danger " : "border-dark-subtle"}`}
											id="floatingInputname"
											placeholder="Username"
											value={values.username}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<label htmlFor="floatingInputname" className="text-secondary fw-bold">
											Username
										</label>
										{errors.username && touched.username ? <p className="text-danger text-start">{errors.username}</p> : null}
									</div>
									<div className="form-floating mb-3">
										<input
											type="email"
											name="email"
											className={`form-control focus-ring ${errors.email && touched.email ? "border-danger focus-ring-danger " : " border-dark-subtle"}`}
											id="floatingInputemail"
											placeholder="name@example.com"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<label htmlFor="floatingInputemail" className="text-secondary fw-bold">
											Email address
										</label>
										{errors.email && touched.email ? <p className="text-danger text-start">{errors.email}</p> : null}
									</div>
									<div className="form-floating mb-3">
										<input
											type="password"
											name="password"
											className={`form-control focus-ring ${errors.password && touched.password ? "border-danger focus-ring-danger " : "border-dark-subtle"}`}
											id="floatingPassword"
											placeholder="Password"
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<label htmlFor="floatingPassword" className="text-secondary fw-bold">
											{" "}
											Password
										</label>
										{errors.password && touched.password ? <p className="text-danger text-start">{errors.password}</p> : null}
									</div>
									<div className="form-floating mb-3">
										<input
											type="password"
											name="confirmPassword"
											className={`form-control focus-ring ${errors.confirmPassword && touched.confirmPassword ? "border-danger focus-ring-danger " : "border-dark-subtle"
												}`}
											id="floatingConfPassword"
											placeholder="Confirm-password"
											value={values.confirmPassword}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
										<label htmlFor="floatingConfPassword" className="text-secondary fw-bold">
											Confirm Password
										</label>
										{errors.confirmPassword && touched.confirmPassword ? <p className="text-danger text-start">{errors.confirmPassword}</p> : null}
									</div>
									<div className="">
										<button className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium" type="submit">
											Sign Up
										</button>
									</div>
									<div className="mt-3 fw-medium">
										Already have an account?
										<Link to={"/"}>Login</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Signup
