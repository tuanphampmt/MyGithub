import React from "react";
import "./App.css";
import TopMenu from "./Component/topmenu/TopMenu";
import MainHeader from "./Component/header/Header";
import Slider from "./Component/slider/Slider";
import TopPage from "./Component/toppage/TopPage";
import ShoppingCart from "./Component/shoppingcart/ShoppingCart";
import ContentPage from "./Component/contentpage/ContentPage";
import Modal from "./Component/modal/Modal";
import Comment from "./Component/comment/Comment";

import Footer from "./Component/footer/Footer";
class App extends React.Component {
	render() {
		return (
			<div>
				<div id="header" className="header">
					<MainHeader />
					<TopMenu />
				</div>
				<Slider />
				<TopPage />
				<ShoppingCart />
				<ContentPage />
        <Modal />
        <Comment />
        <Footer />
			</div>
		);
	}
}

export default App;
