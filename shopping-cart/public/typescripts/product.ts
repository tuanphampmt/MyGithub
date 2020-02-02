export class Product {
	private _id: number;
	private _name: string;
	private _image: string;
	private _summary: string;
	private _price: number;
	private _canBuy: boolean;

	public get id(): number {
		return this._id;
	}

	public set id(id: number) {
		this._id = id;
	}

	public get name(): string {
		return this._name;
	}

	public set name(name: string) {
		this._name = name;
	}

	public get image(): string {
		return this._image;
	}

	public set image(image: string) {
		this._image = image;
	}

	public get summary(): string {
		return this._summary;
	}

	public set summary(summary: string) {
		this._summary = summary;
	}

	public get price(): number {
		return this._price;
	}

	public set price(price: number) {
		this._price = price;
	}

	public get canBuy(): boolean {
		return this._canBuy;
	}

	public set canBuy(canBuy: boolean) {
		this._canBuy = canBuy;
	}

	constructor(
		id: number,
		name: string,
		image: string,
		summary: string,
		price: number,
		canBuy: boolean = true
	) {
		this.name = name;
		this.id = id;
		this.image = image;
		this.summary = summary;
		this.price = price;
		this.canBuy = canBuy;
	}
}
