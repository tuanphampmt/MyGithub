import React, { Component } from "react";

export default class Slider extends Component {
	render() {
		return (
			<div>
				<div id="home-slider">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 header-top-right">
								<div className="homeslider">
									<ul id="contenhomeslider">
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img1.jpg"
												title="Funky roots"
											/>
										</li>
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img2.jpg"
												title="Funky roots"
											/>
										</li>
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img3.jpg"
												title="Funky roots"
											/>
										</li>
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img4.jpg"
												title="Funky roots"
											/>
										</li>
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img5.jpg"
												title="Funky roots"
											/>
										</li>
										<li>
											<img
												alt="Funky roots"
												src="images/slide/img6.jpg"
												title="Funky roots"
											/>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
