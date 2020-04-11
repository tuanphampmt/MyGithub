import React, { Component } from "react";

export default class TopMenu extends Component {
	render() {
		return (
			<div id="nav-top-menu" className="nav-top-menu">
				<div className="container">
					<div className="row">
						<div id="main-menu" className="col-sm-12 main-menu">
							<nav className="navbar navbar-default">
								<div className="container-fluid">
									<div className="navbar-header">
										<button
											type="button"
											className="navbar-toggle collapsed"
											data-toggle="collapse"
											data-target="#navbar"
											aria-expanded="false"
											aria-controls="navbar"
										>
											<i className="fa fa-bars" />
										</button>
										<a className="navbar-brand" href="/#">
											MENU
										</a>
									</div>
									<div id="navbar" className="navbar-collapse collapse">
										<ul className="nav navbar-nav">
											<li className="active">
												<a href="index.html">
													<span className="fa fa-home" /> Home
												</a>
											</li>
											<li className="dropdown">
												<a
													href="/#"
													className="dropdown-toggle"
													data-toggle="dropdown"
												>
													Product
												</a>
												<ul className="dropdown-menu container-fluid">
													<li className="block-container">
														<ul className="block">
															<li className="link_container">
																<a href="product-vegetables.html">Vegetables</a>
															</li>
															<li className="link_container">
																<a href="product-fruits.html">Fruits</a>
															</li>
															<li className="link_container">
																<a href="product-cereals.html">Cereals</a>
															</li>
															<li className="link_container">
																<a href="product-beans.html">Beans</a>
															</li>
															<li className="link_container">
																<a href="product-nuts-seeds.html">
																	Nuts &amp; Seeds
																</a>
															</li>
															<li className="link_container">
																<a href="product-spices.html">Spices</a>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li>
												<a href="news.html">News</a>
											</li>
											<li>
												<a href="policy-faq.html">Policy &amp; FAQ</a>
											</li>
											<li>
												<a href="about-us.html">About Us</a>
											</li>
											<li>
												<a href="contact-us.html">Contact Us</a>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
					<div id="form-search-opntop"></div>
					<div id="user-info-opntop"></div>
					<div id="shopping-cart-box-ontop">
						<i
							className="fa fa-user"
							data-toggle="modal"
							data-target="#myModal"
						/>
						<div className="shopping-cart-box-ontop-content" />
					</div>
				</div>
			</div>
		);
	}
}
