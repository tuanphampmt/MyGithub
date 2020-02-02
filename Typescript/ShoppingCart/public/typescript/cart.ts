import {Product} from './product'
export class Cart {
    private product: Product;
    private quantity: number;


    constructor(product: Product, quantity: number = 1){
        this.product = product;
        this.quantity = quantity;
    }

    total(): number {
        return
    } 
    showProductCart(): string {
        return
    }
}