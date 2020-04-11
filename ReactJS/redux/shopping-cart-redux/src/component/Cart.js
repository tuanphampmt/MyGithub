import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="cd-cart cd-cart--empty js-cd-cart">
                <a href="#0" className="cd-cart__trigger text-replace">
                    Cart
                    <ul className="cd-cart__count">

                        <li>0</li>
                        <li>0</li>
                    </ul>

                </a>

                <div className="cd-cart__content">
                    <div className="cd-cart__layout">
                        <header className="cd-cart__header">
                            <h2>Cart</h2>
                            <span className="cd-cart__undo"
                            >Item removed. <a href="#0">Undo</a></span
                            >
                        </header>

                        <div className="cd-cart__body">
                            <ul>

                            </ul>
                        </div>

                        <footer className="cd-cart__footer">
                            <a href="#0" className="cd-cart__checkout">
                                <em
                                >Checkout - $<span>0</span>
                                    <svg className="icon icon--sm" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor">
                                            <line
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                x1="3"
                                                y1="12"
                                                x2="21"
                                                y2="12"
                                            />
                                            <polyline
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                points="15,6 21,12 15,18 "
                                            />
                                        </g>
                                    </svg>
                                </em>
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;