import { Product } from "./product";
import axios from "axios"
export class ProductRepository {
	private products: Product[] = [];
	constructor() {
		var hi = this;
		const request = async () => {
			const response = await fetch("http://localhost:3000/product", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});

			const data = await response.json();
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				hi.addItem(
					new Product(
						data[i]._id,
						data[i].name,
						data[i].image,
						data[i].summary,
						data[i].price,
						data[i].canBuy
					)
				);
			}
		};
		request();
	}

	public addItem(product: Product) {
		// this.products[this.products.length] = product;
		this.products.push(product);
	}

	public getItems(): Product[] {
		return this.products;
	}

	public getItemById(id: number): Product {
		/* // Case 1:
        let total = this.products.length;
        for(let i = 0; i < total; i++){
            if(this.products[i].id == id){
                return this.products[i];
            } 
        }
        return null;
        */
		// Case 2:
		let products = this.products.filter((product) => product.id == id);
		if (products.length > 0) {
			return products[0];
		}
		return null;
	}

	public showItemInHtml(): string {
		console.log(this.products.length);
		let html = "";
		this.products.forEach(function(product) {
			html += `<li>
                <div class="row">
                    <div class="product-img col-md-3">
                        <img class="img-thumbnail" src="${product.image}"/>
                    </div>
                    <div class="col-md-6">
                        <h3 class="name">${product.name}</h3>
                        <p class="description">${product.summary}</p>
                    </div>
                    <div class="buy col-md-3 text-right">`;
			if (product.canBuy) {
				html += `<input name="qty-product-${product.id}" class="quantity text-center" type="number" min="1" value="1">
                        <p >$ <strong>${product.price}</strong></p>
                        <a  data-product="${product.id}" class="btn btn-primary price">ADD CART</a> 
                        `;
			} else {
				html += `
                    <p >$ <strong>${product.price}</strong></p>

                    <button class="btn btn-primary price disabled">ADD CART</button>`;
			}

			html += `</div>
                </div>
            </li>
             `;
		});
		return html;
	}
}
