
class Animal {
	protected name: string; // mac dinh no la public
	public constructor(theName: string) {
		this.name = theName;
	}
	public move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    public test(){
        console.log("Hello World " + this.name)
    }
}
class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log("Slithering...");
        super.move(distanceInMeters);
        console.log(this.name + " running") //truy cap ben trong class
	}
}
const animal = new Animal("Sara the Java");
const snake = new Snake("Sammy the Python");
snake.move() // truy cap ben trong class con
console.log(animal.name) // truy cap ben ngoai class bi loi
animal.test() // truy cap ben ngoai class

