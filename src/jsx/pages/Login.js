import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {
	loadingToggleAction, loginAction,
} from '../../store/actions/AuthActions';

// image
//import logo from "../../images/logo-full.png";
import loginbg from "../../images/pic1.png";

function Login(props) {
	const [email, setEmail] = useState('demo@example.com');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('123456');

	const dispatch = useDispatch();

	function onLogin(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) {
			return;
		}
		dispatch(loadingToggleAction(true));
		dispatch(loginAction(email, password, props.history));
	}

	return (
		<div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
			<div className="login-aside text-center  d-flex flex-column flex-row-auto">
				<div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
					<div className="text-center mb-4 pt-5">
						<svg className="logo-abbr me-3" width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0)">
								<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="#1362FC" />
								<circle cx="42" cy="19" r="10" fill="white" />
								<circle cx="75.5" cy="76.5" r="16.5" fill="#12A7FB" />
								<circle cx="5.5" cy="1.5" r="17.5" fill="#1362FC" />
								<circle className="rect-primary-rect-1" cx="5.5" cy="1.5" r="16.5" stroke="white" stroke-opacity="0.66" stroke-width="2" />
								<path d="M33.7656 87.2159C34.9565 76.5246 37.5874 53.6112 38.5845 47.4881V47.4881C39.1698 43.8941 40.2547 47.2322 39.8692 50.8531C38.9933 59.0813 37.1429 74.1221 35.5121 87.4131C33.1225 106.889 33.3507 95.974 33.7635 88.0818" stroke="white" stroke-width="21" stroke-linecap="round" stroke-linejoin="round" />
							</g>
							<defs>
								<clipPath id="clip0">
									<rect className="rect-primary-rect" width="80" height="80" rx="16" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<svg className="brand-title" width="108" height="140" viewBox="130 65 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g transform="translate(0.000000,403.000000) scale(0.100000,-0.100000)"
								fill="#000000" stroke="none">
								<path d="M1575 2441 c-70 -18 -134 -71 -171 -141 -17 -31 -19 -65 -22 -326 -2
-182 1 -307 7 -331 38 -141 179 -221 314 -178 63 20 127 72 127 104 0 11 -11
28 -25 37 -25 16 -27 16 -73 -17 -40 -29 -55 -34 -104 -34 -66 0 -103 22 -130
76 -16 30 -18 68 -18 324 0 272 1 292 20 323 50 82 181 98 239 28 33 -39 106
-2 82 42 -37 68 -160 115 -246 93z"/>
								<path d="M1951 2431 c-20 -20 -21 -31 -21 -181 0 -147 2 -162 20 -180 11 -11
25 -20 30 -20 6 0 19 9 30 20 18 18 20 33 20 150 l0 130 73 0 c83 0 125 -19
157 -72 29 -48 29 -208 0 -256 -36 -59 -71 -72 -192 -72 -83 0 -110 -3 -122
-16 -24 -23 -24 -445 0 -468 21 -21 47 -20 67 2 15 16 17 45 17 200 l0 182 58
0 59 0 38 -102 c109 -293 107 -288 132 -294 25 -7 63 18 63 40 0 6 -31 95 -70
196 l-69 185 45 39 c74 63 88 101 88 236 0 129 -12 167 -76 226 -59 56 -93 67
-214 72 -104 4 -113 3 -133 -17z"/>
								<path d="M2500 2430 c-19 -19 -20 -33 -20 -484 0 -409 2 -466 16 -480 21 -21
47 -20 67 2 15 16 17 52 18 293 0 245 2 269 14 229 7 -25 38 -137 69 -250 31
-113 60 -222 66 -242 13 -47 51 -62 80 -32 10 11 42 109 75 229 31 116 65 239
75 275 l18 65 1 -277 c1 -237 3 -279 17 -292 21 -21 47 -20 67 2 15 17 17 65
17 480 0 449 -1 463 -20 482 -49 49 -63 23 -141 -255 -39 -138 -85 -301 -102
-362 -17 -62 -34 -113 -37 -113 -3 0 -20 51 -37 113 -17 61 -63 224 -102 362
-78 278 -92 304 -141 255z"/>
							</g>
						</svg>
					</div>
					<h3 className="mb-2">Welcome Liem!</h3>
					<p>Team SPW401 & Design Web <br />Web Admin </p>
				</div>
				<div className="aside-image" style={{ backgroundImage: "url(" + loginbg + ")" }}></div>
			</div>
			<div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
				<div className="d-flex justify-content-center h-100 align-items-center">
					<div className="authincation-content style-2">
						<div className="row no-gutters">
							<div className="col-xl-12 tab-content">
								<div id="sign-in" className="auth-form   form-validation">
									{props.errorMessage && (
										<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
											{props.errorMessage}
										</div>
									)}
									{props.successMessage && (
										<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
											{props.successMessage}
										</div>
									)}
									<form onSubmit={onLogin} className="form-validate">
										<h3 className="text-center mb-4 text-black">Sign in your account</h3>
										<div className="form-group mb-3">
											<label className="mb-1" htmlFor="val-email"><strong>Email</strong></label>
											<div>
												<input type="email" className="form-control"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													placeholder="Type Your Email Address"
												/>
											</div>
											{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
										</div>
										<div className="form-group mb-3">
											<label className="mb-1"><strong>Password</strong></label>
											<input
												type="password"
												className="form-control"
												value={password}
												placeholder="Type Your Password"
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
											{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
										</div>
										<div className="form-row d-flex justify-content-between mt-4 mb-2">
											<div className="form-group mb-3">
												<div className="custom-control custom-checkbox ml-1">
													<input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
													<label className="form-check-label" htmlFor="basic_checkbox_1">Remember my preference</label>
												</div>
											</div>
										</div>
										<div className="text-center form-group mb-3">
											<button type="submit" className="btn btn-primary btn-block">
												Sign In
											</button>
										</div>
									</form>
									<div className="new-account mt-3">
										<p>You don't remeber an account ? <Link className="text-primary" to="./page-register">Forgot password</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Login);
