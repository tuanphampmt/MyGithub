import React, { Component } from "react";

export default class ShoppingCart extends Component {
	render() {
		return (
			<div className="demo_changer" id="demo_changer">
				<div className="demo-icon fa fa-shopping-cart">
					<span className="notify notify-left" id="count-cart">
						2
					</span>
				</div>
				<div className="form_holder">
					<div className="cart-block">
						<div className="cart-block-content">
							<div className="cart-block-list">
								<div className="shop_cart">
									<table className="shop_table">
										<tbody id="show-cart"></tbody>
									</table>
								</div>
							</div>
							<div className="toal-cart">
								<span>Total</span>
								<span className="toal-price pull-right" id="total_price">
									54,000đ
								</span>
							</div>
							<div className="cart-buttons">
								<a href="shoping-cart.html" className="btn-check-out">
									Payment
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
