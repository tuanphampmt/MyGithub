import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="container">
					{/* introduce-box */}
					<div id="introduce-box" className="row">
						<div className="col-md-3">
							<div id="address-box">
								<a href="#">
									<img src="images/logo.png" alt="logo" />
								</a>
								<div id="address-list">
									<div className="tit-name">Address:</div>
									<div className="tit-contain">
										999 Le Van Hien street, Ngu Hanh Son District, Danang city,
										Vietnam.
									</div>
									<div className="tit-name">Phone:</div>
									<div className="tit-contain">(+84) 511.3446.295</div>
									<div className="tit-name">Email:</div>
									<div className="tit-contain">ecoshop@gmail.com</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-sm-6">
									<div className="introduce-title">CUSTOMER CARE</div>
									<ul id="introduce-support" className="introduce-list">
										<li> Mon - Fri: 7am to 8pm </li>
										<li>Sat &amp; Sun: 7am to 6pm</li>
										<li>
											<a href="policy-faq.html">How to Buy</a>
										</li>
										<li>
											<a href="policy-faq.html">How to Payment</a>
										</li>
										<li>
											<a href="policy-faq.html">FAQ</a>
										</li>
									</ul>
								</div>
								<div className="col-sm-6">
									<div className="introduce-title">Policy</div>
									<ul id="introduce-Account" className="introduce-list">
										<li>
											<a href="policy-faq.html">Security Policy</a>
										</li>
										<li>
											<a href="policy-faq.html">Payment Policy</a>
										</li>
										<li>
											<a href="policy-faq.html">Return &amp; Change Policy</a>
										</li>
										<li>
											<a href="policy-faq.html">Terms &amp; Conditions</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div id="contact-box">
								<div className="introduce-title">
									Subscribe to Eco Shop newsletter
								</div>
								<div className="input-group" id="mail-box">
									<input type="text" placeholder="Your email address" />
									<span className="input-group-btn">
										<button className="btn btn-default" type="button">
											OK
										</button>
									</span>
								</div>
								{/* /input-group */}
								<div className="introduce-title">Follow Us</div>
								{/*<div class="social-link">*/}
								{/*<a href="#"><i class="fa fa-facebook"></i></a>*/}
								{/*<a href="#"><i class="fa fa-pinterest-p"></i></a>*/}
								{/*<a href="#"><i class="fa fa-google-plus"></i></a>*/}
								{/*<a href="#"><i class="fa fa-youtube"></i></a>*/}
								{/*</div>*/}
								<div className="social-link">
									<ul className="social-icons">
										<li>
											<a className="rss" data-original-title="rss" href="#" />
										</li>
										<li>
											<a
												className="facebook"
												data-original-title="facebook"
												href="#"
											/>
										</li>
										<li>
											<a
												className="twitter"
												data-original-title="twitter"
												href="#"
											/>
										</li>
										<li>
											<a
												className="googleplus"
												data-original-title="googleplus"
												href="#"
											/>
										</li>
										<li>
											<a
												className="linkedin"
												data-original-title="linkedin"
												href="#"
											/>
										</li>
										<li>
											<a
												className="youtube"
												data-original-title="youtube"
												href="#"
											/>
										</li>
										<li>
											<a
												className="vimeo"
												data-original-title="vimeo"
												href="#"
											/>
										</li>
										<li>
											<a
												className="skype"
												data-original-title="skype"
												href="#"
											/>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* /#introduce-box */}
					<div id="footer-menu-box">
						<p className="text-center">
							Copyrights © 2016 Eco Shop. All Rights Reserved.
						</p>
					</div>
					{/* /#footer-menu-box */}
				</div>
			</footer>
		);
	}
}
