import React, { Component } from "react";

export default class Modal extends Component {
	render() {
		return (
			<div
				className="modal fade"
				id="myModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="myLargeModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-hidden="true"
							>
								×
							</button>
							<h4
								className="modal-title"
								id="myModalLabel"
								style={{ fontWeight: "bold" }}
							>
								LOGIN/REGISTER
							</h4>
						</div>
						<div className="modal-body">
							<div className="row">
								<div
									className="col-md-7"
									style={{
										borderRight: "1px dotted #C2C2C2",
										paddingRight: 30
									}}
								>
									{/* Nav tabs */}
									<ul className="nav nav-tabs">
										<li className="active">
											<a href="#Login" data-toggle="tab">
												Login
											</a>
										</li>
										<li>
											<a href="#Registration" data-toggle="tab">
												Register
											</a>
										</li>
									</ul>
									{/* Tab panes */}
									<div className="tab-content">
										{/* LOGIN */}
										<div className="tab-pane active" id="Login">
											<form
												action="javascript:void()"
												name="dangnhap_from"
												className="form-horizontal"
												id="dangnhap_from"
												method="post"
											>
												<div className="form-group">
													<label
														htmlFor="email_login"
														className="col-sm-3 control-label"
													>
														Email
													</label>
													<div className="col-sm-9">
														<input
															type="email"
															className="input form-control"
															id="email_login"
															placeholder="Email...."
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="pass_login"
														className="col-sm-3 control-label"
													>
														Password
													</label>
													<div className="col-sm-9">
														<input
															type="password"
															className="input form-control"
															id="pass_login"
															placeholder="Password...."
														/>
													</div>
												</div>
												<div className="row">
													<div className="col-sm-3"></div>
													<div className="col-sm-9">
														<button
															className="button"
															type="submit"
															id="button-confirm"
														>
															Login
														</button>
													</div>
												</div>
											</form>
										</div>
										{/* REGISTER */}
										<div className="tab-pane fade" id="Registration">
											<form
												className="form-horizontal"
												name="dangkytk_form"
												action="#"
												method="post"
												encType="multipart/form-data"
												id="dangkytk_form register"
											>
												<div className="form-group">
													<label
														htmlFor="frm_name"
														className="col-sm-4 control-label"
													>
														Full Name
													</label>
													<div className="col-sm-8">
														<input
															type="text"
															className="input form-control"
															id="frm_name"
															required
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="emailtk"
														className="col-sm-4 control-label"
													>
														Email
													</label>
													<div className="col-sm-8">
														<input
															type="email"
															className="input form-control"
															id="emailtk"
															required
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="pass_tk"
														className="col-sm-4 control-label"
													>
														Password
													</label>
													<div className="col-sm-8">
														<input
															type="password"
															className="input form-control"
															id="pass_tk"
															required
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="repass_tk"
														className="col-sm-4 control-label"
													>
														Re-password
													</label>
													<div className="col-sm-8">
														<input
															type="password"
															className="input form-control"
															id="repass_tk"
															required
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="ngaysinh_tk"
														className="col-sm-4 control-label"
													>
														Birth day
													</label>
													<div className="col-sm-8">
														<input
															type="date"
															className="input form-control"
															id="ngaysinh_tk"
															required
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="gender_tk"
														className="col-sm-4 control-label"
													>
														Gender
													</label>
													<div className="col-sm-8">
														<select
															className="input form-control"
															name="gioitinh"
															id="gender_tk"
														>
															<option value checked>
																I am...
															</option>
															<option value={1}>Female</option>
															<option value={0}>Male</option>
															<option value={0}>Other</option>
														</select>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="diachi"
														className="col-sm-4 control-label"
													>
														Adress
													</label>
													<div className="col-sm-8">
														<input
															type="text"
															name="diachi"
															className="input form-control"
															id="diachi_dk"
														/>
													</div>
												</div>
												<div className="form-group">
													<label
														htmlFor="dienthoai"
														className="col-sm-4 control-label"
													>
														Phone number
													</label>
													<div className="col-sm-8">
														<input
															type="text"
															name="dienthoai"
															className="input form-control"
															id="dienthoai_dk"
														/>
													</div>
												</div>
												<div className="row">
													<div className="col-sm-4"></div>
													<div className="col-sm-8">
														<button className="button" type="submit">
															Register
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div id="OR" className="hidden-xs">
										OR
									</div>
								</div>
								{/* Facebook - Google account */}
								<div className="col-md-5">
									<div className="row text-center sign-with">
										<div className="social-header">Login With</div>
										<div className="unit social-column">
											<div className="social-inner">
												<div>
													<a href>
														<img
															src="images/fb-login-button-big.png"
															alt="login-facebook"
														/>
													</a>
												</div>
												<div>
													<a href>
														<img
															src="images/gg-login-button-big.png"
															alt="login-google"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
