import React, {Component} from 'react';
import ProductItem from "./ProductItem";
import data from "../data"
class Home extends Component {
    render() {
        return (
            <div>
                <div className="container content">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="my-4">Telephone </h1>
                            <div className="list-group">
                                <a href="#1" className="list-group-item">
                                    Iphone
                                </a>
                                <a href="#1" className="list-group-item">
                                    Samsung
                                </a>
                                <a href="#1" className="list-group-item">
                                    Oppo
                                </a>
                            </div>
                        </div>
                        {/* /.col-lg-3 */}
                        <div className="col-lg-9">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide my-4"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to={0}
                                        className="active"
                                    />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://cdn.tgdd.vn/2020/03/banner/800-300-800x300-14.png"
                                            alt="First slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://cdn.tgdd.vn/2020/03/banner/iphone-11-800-300-800x300-1.png"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            className="d-block img-fluid"
                                            src="https://cdn.tgdd.vn/2020/03/banner/800-300-800x300-13.png"
                                            alt="Third slide"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleIndicators"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="row">
                                {
                                    data.map((value, i) => {
                                        return(
                                            <ProductItem
                                                IdProduct={value.id}
                                                name={value.name}
                                                price={value.price}
                                                desc={value.desc}
                                                content={value.content}
                                                pathImage={value.pathImage}
                                                key={i}
                                            />
                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>;
            </div>
        );
    }
}

export default Home;