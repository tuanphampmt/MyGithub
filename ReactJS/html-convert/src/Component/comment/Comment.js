import React, { Component } from "react";

export default class Comment extends Component {
	render() {
		return (
			<div id="owl-demo-ppsay">
				<div className="container">
					<div className="ppsay-title">CUSTOMER COMMENT</div>
					<div
						id="customer-item-carousel"
						className="carousel slide hidden-sm hidden-xs"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#customer-item-carousel"
								data-slide-to={0}
								className="active"
							/>
							<li data-target="#customer-item-carousel" data-slide-to={1} />
							<li data-target="#customer-item-carousel" data-slide-to={2} />
						</ol>
						<div className="carousel-inner hidden-sm hidden-xs">
							<div className="item active">
								<div className="ppsaydiv">
									<div className="ppsaycontent hidden-xs col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content2-2.png"
												alt="Ms. Huong Nguyen"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p style={{ textAlign: "justify" }}>
													<span>“ </span>I am pleased with product quality and
													service quality of Eco Shop. Best wishes to your shop.
													I hope that there are more new best products and your
													service is always sustainable.<span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Ms. Huong Nguyen</span>
											</p>
										</div>
									</div>
									<div className="ppsaycontent col-xs-12 col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content.png"
												alt="Ms. Linh Pham"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p style={{ textAlign: "justify" }}>
													<span>“ </span>I am so busy that I do not have any
													time to go suppermarket. So that, buying food online
													is my best choice. Your products are always fresh and
													delicious. I will continue buying foods at your online
													shop. <span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Ms. Linh Pham</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="ppsaydiv">
									<div className="ppsaycontent col-xs-12 col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content2-2.png"
												alt="Ms. Hoang Tran"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p style={{ textAlign: "justify" }}>
													<span>“ </span> I higly appreciate your product
													quality and your service. I now truly believe in your
													brand. <span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Ms. Hoang Tran</span>
											</p>
										</div>
									</div>
									<div className="ppsaycontent col-xs-12 col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content.png"
												alt="Ms. Thu Phan"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p>
													<span style={{ textAlign: "justify" }}>“ </span> I am
													a young mom and have to work. It costs my time and
													money to access your website and buy products.{" "}
													<span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Ms.Thu Phan</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="ppsaydiv">
									<div className="ppsaycontent col-xs-12 col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content-2.png"
												alt="Ms. Hoang Tran"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p style={{ textAlign: "justify" }}>
													<span>“ </span>When I looked for natural and organic
													shop, my friends introduced your shop to me. At the
													first time I came your shop, I am so satisfactory
													because of your customer care.<span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Ms. Lan Tran</span>
											</p>
										</div>
									</div>
									<div className="ppsaycontent col-xs-12 col-sm-6 col-md-6">
										<div className="ppsayavt col-md-3 col-sm-3">
											<img
												src="images/parallax-content-1.png"
												alt="Ms. Trang Le"
											/>
										</div>
										<div className="ppsayauthor col-md-9 col-sm-9">
											<div className="ppsaycontentcmt">
												<p style={{ textAlign: "justify" }}>
													<span>“ </span>Your staff are so friendly and
													enthusiastic. Your shop is also clean and nice. Of
													course, your products are best quality.<span>”</span>
												</p>
											</div>
											<p>
												<span>Customer:</span>{" "}
												<span className="name">Trang Le</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="customer-item-carousel"
						className="carousel slide hidden-md hidden-lg"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#customer-item-carousel"
								data-slide-to={0}
								className="active"
							/>
							<li data-target="#customer-item-carousel" data-slide-to={1} />
							<li data-target="#customer-item-carousel" data-slide-to={2} />
							<li data-target="#customer-item-carousel" data-slide-to={3} />
							<li data-target="#customer-item-carousel" data-slide-to={4} />
							<li data-target="#customer-item-carousel" data-slide-to={5} />
						</ol>
					</div>
				</div>
			</div>
		);
	}
}
