import { Product } from "./product";
import { Cart } from "./cart";

class ManageCart {
	private ProductsCart: Cart[] = [];

	addProductCart(product: Product, quantity: number): void {}

	updateProductCart(product: Product, quantity: number): void {}

	checkStatusProduct(): void {
		return;
	}
	totalQuantityProducts(): number {
		return;
	}
	totalPriceProducts(): number {
		return;
	}
	showCart(): string {
		return;
	}
}
