import { Product } from "./product";
export class ProductRepository {
	private products: Product[] = [];

	constructor() {
		this.addItem(
			new Product(
				100,
				"Bulbasaur",
				"bulbasaur.png",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
				5000
			)
		);
		this.addItem(
			new Product(
				101,
				"Bharmander",
				"charmander.png",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
				10000,
				false
			)
		);
		this.addItem(
			new Product(
				102,
				"Ivysaur",
				"ivysaur.png",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
				15000
			)
		);
		this.addItem(
			new Product(
				103,
				"Squirtle",
				"squirtle.png",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
				20000,
				false
			)
		);
		this.addItem(
			new Product(
				104,
				"Venusaur",
				"venusaur.png",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
				25000
			)
		);
		console.log(this.products)
	}

	public addItem(product: Product) {
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
		let total = this.products.length;
		console.log(total)
		let html = "";
		for (let i = 0; i < total; i++) {


			html += `<li>
                <div class="row">
                    <div class="product-img col-md-3">
                        <img class="img-thumbnail" src="/images/characters/${this.products[i].image}"/>
                    </div>
                    <div class="col-md-6">
                        <h3 class="name">${this.products[i].name}</h3>
                        <p class="description">${this.products[i].summary}</p>
                    </div>
                    <div class="buy col-md-3 text-right">`;
			if (this.products[i].canBuy) {
				html += `<input name="qty-product-${this.products[i].id}" class="quantity text-center" type="number" min="1" value="1">
                        <p >$ <strong>${this.products[i].price}</strong></p>
                        <a  data-product="${this.products[i].id}" class="btn btn-primary price">ADD CART</a> 
                        `;
			} else {
				html += `
                    <p >$ <strong>${this.products[i].price}</strong></p>

                    <button class="btn btn-primary price disabled">ADD CART</button>`;
            }
            
			html += `</div>
                </div>
            </li>
             `;
		}
		return html;
	}
}
