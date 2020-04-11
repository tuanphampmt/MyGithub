import React, { Component } from "react";

export default class TopPage extends Component {
	render() {
		return (
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12">
							<h2 className="page-heading">
								<span className="page-heading-title">
									<img alt="fashion" src="images/commerce-tag.png" /> PROMOTION
								</span>
							</h2>
							<div className="latest-deals-product">
								<ul
									className="product-list owl-carousel"
									data-dots="false"
									data-loop="true"
									data-nav="true"
									data-margin={10}
									data-autoplaytimeout={1000}
									data-autoplayhoverpause="true"
									data-responsive='{"0":{"items":1},"600":{"items":3},"1000":{"items":5}}'
								>
									<li>
										<div className="left-block">
											<a href="/#" >
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/vegetables/asparagus_300x300.jpg"
												/>
											</a>
                                            <div className="quick-view">
                            
												<a 
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/vegetables/asparagus_600x600.jpg"
													className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Carr"
													href="/#"
													data-name="Asparagus - 1kg"
													data-price={38500}
													data-image="vegetables/asparagus_300x300.jpg"
													data-product-code="AS109"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="asparagus-detail.html">Asparagus - 1kg</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													38,500đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">55,000đ</span>
											</div>
										</div>
									</li>
									<li>
										<div className="left-block">
											<a href="/#">
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/cereals/barley_300x300.jpg"
												/>
											</a>
											<div className="quick-view">
												<a
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/cereals/barley_600x600.jpg"
													className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Cart"
													href="a"
													data-name="Barley - 1kg"
													data-price={21000}
													data-image="cereals/barley_300x300.jpg"
													data-product-code="BL237"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="barley-detail.html">Barley - 1kg</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													21,000đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">30,000đ</span>
											</div>
										</div>
									</li>
									<li>
										<div className="left-block">
											<a href="/#">
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/fruits/papaya_300x300.jpg"
												/>
											</a>
											<div className="quick-view">
												<a
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/fruits/papaya_600x600.jpg"
													className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Cart"
													href="/#"
													data-name="Papaya - 1kg"
													data-price={10500}
													data-image="fruits/papaya_300x300.jpg"
													data-product-code="PP987"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="papaya-detail.html">Papaya - 1kg</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													10,500đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">15,000đ</span>
											</div>
										</div>
									</li>
									<li>
										<div className="left-block">
											<a href="/#">
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/beans/blackbeans_300x300.jpg"
												/>
											</a>
											<div className="quick-view">
												<a
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/beans/blackbeans_600x600.jpg"
													className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Cart"
													href="/#"
													data-name="Black Beans - 1kg"
													data-price={31500}
													data-image="beans/blackbeans_300x300"
													data-product-code="BB0927"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="black-beans-detail.html">Black Beans - 1kg</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													31,500đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">45,000đ</span>
											</div>
										</div>
									</li>
									<li>
										<div className="left-block">
											<a href="/#">
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/nuts/walnut_300x300.jpg"
												/>
											</a>
											<div className="quick-view">
												<a
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/nuts/walnut_600x600.jpg"
													className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Cart"
													href="/#"
													data-name="Walnuts - 500gr"
													data-price={199500}
													data-image="nuts/walnut_300x300.jpg"
													data-product-code="WN982"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="walnuts-detail.html">Walnuts - 500gr</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													199,500đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">285,000đ</span>
											</div>
										</div>
									</li>
									<li>
										<div className="left-block">
											<a href="/#">
												<img
													className="img-responsive"
													alt="product"
													src="images/product-detail/spices/chilli_300x300.png"
												/>
											</a>
											<div className="quick-view">
												<a
													title="Add to my wishlist"
													className="heart"
													href="/#"
                                                >
                                                </a>
												<a
													title="Add to compare"
													className="compare"
													href="/#"
                                                >
                                                </a>
												<a
													title="Quick view"
													href="images/product-detail/spices/chilli_600x600.png"
                                                    className="search fancybox-button"
                                                >
                                                </a>
											</div>
											<div className="add-to-cart">
												<a
													className="add-item-to-cart"
													title="Add to Cart"
													href="/#"
													data-name="Chilly - 500gr"
													data-price={70000}
													data-image="spices/chilli_300x300.png"
													data-product-code="CL982"
												>
													Add to Cart
												</a>
											</div>
											<div className="price-percent-reduction2">-30% OFF</div>
										</div>
										<div className="right-block">
											<h5 className="product-name">
												<a href="chilly-detail.html">Chilly - 500gr</a>
											</h5>
											<div className="content_price">
												<span className="price product-price">
													<span style={{ color: "orangered" }}>
														Best Price:
													</span>{" "}
													70,000đ
												</span>
												<br />
												<span style={{ color: "black" }}>Price:</span>
												<span className="price old-price">100,000đ</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
