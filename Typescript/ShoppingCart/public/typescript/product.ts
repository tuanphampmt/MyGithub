export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _desc: string;
    private _status:boolean;
    private _pathImages: string;

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

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get desc(): string {
        return this._desc;
    }

    public set desc(desc: string) {
        this._desc = desc;
    }

    public get status(): boolean {
        return this._status;
    }

    public set status(status: boolean) {
        this._status = status;
    }

    public get pathImages(): string {
        return this._pathImages;
    }

    public set pathImages(pathImages: string) {
        this._pathImages = pathImages;
    }

    constructor(id: number, name: string, price: number, desc: string, status:boolean, pathImages: string){
        this._id = id;
        this._name = name;
        this._price = price;
        this._desc = desc;
        this._status = status;
    }
    
}