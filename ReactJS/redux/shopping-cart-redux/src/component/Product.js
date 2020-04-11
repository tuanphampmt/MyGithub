import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="true" alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">IPhone 11 64GB Mới Chính Hãng</h5>
                        <p className="card-text">Chưa kích hoạt đủ bảo hành Việt Nam VN/A</p>
                        <p className="card-price">$400</p>
                        <p className="flex flex-wrap flex-center flex-gap-xxs">
                            <a
                                href="#0"
                                className="cd-add-to-cart js-cd-add-to-cart"
                                data-price="25.99"
                            >
                                Add To Cart
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="true"
                        alt="Card cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">IPhone 11 Pro cũ 64Gb Nguyên Bản</h5>
                        <p className="card-text">Chưa Active, Bản EU, Tặng Sạc, Cable</p>
                        <p className="card-price">$400</p>
                        <p className="flex flex-wrap flex-center flex-gap-xxs">
                            <a
                                href="#0"
                                className="cd-add-to-cart js-cd-add-to-cart"
                                data-price="25.99"
                            >
                                Add To Cart
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src="true"
                        alt="Card cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">IPhone 11 Pro Max 64GB Mới Chính Hãng</h5>
                        <p className="card-text">Chưa kích hoạt đủ bảo hành Việt Nam VN/A</p>
                        <p className="card-price">$400</p>
                        <p className="flex flex-wrap flex-center flex-gap-xxs">
                            <a
                                href="#0"
                                className="cd-add-to-cart js-cd-add-to-cart"
                                data-price="25.99"
                            >
                                Add To Cart
                            </a>
                        </p>
                    </div>
                </div>
            </div>
    );
    }
}

export default Product;