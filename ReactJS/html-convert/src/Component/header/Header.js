import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className="container main-header">
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 logo">
						<a href="index.html">
							<img alt="Eco Shop" src="images/logo.png" />
						</a>
					</div>
					<div className="col-xs-4 col-sm-12 col-md-5 col-lg-4 header-search-box">
						<form className="form-inline">
							<div className="form-group input-serach">
								<input type="text" placeholder="Search ..." />
							</div>
							<button type="submit" className="pull-right btn-search">
								<i className="fa fa-search" />
							</button>
						</form>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 group-button-header">
						<a title="Compare" href="/#" className="btn-compare">
							Compare
						</a>
						<a title="My wishlist" href="/#" className="btn-heart">
							Heart
						</a>
						<div className="btn-cart" id="cart-block">
							<a title="SignIn" href data-toggle="modal" data-target="#myModal">
								Log In
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
