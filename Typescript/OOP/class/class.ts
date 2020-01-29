class Character {
	characterName: string;
	slogan: string;
	blood: number;

	constructor(characterName: string, slogan: string, blood: number) {
		this.characterName = characterName;
		this.slogan = slogan;
		this.blood = blood;
	}

	show(): string {
		return `Name: ${this.characterName}, Slovenan: ${this.slogan}, Blood: ${this.blood}`;
	}
}

const character = new Character("Natalyta", "Ý chí của ma thuật", 450);
console.log(character.show());

class Telephone {
	telephoneName: string;
	price: number;
	star: number;
	color: Array<string>;

	constructor(
		telephoneName: string,
		price: number,
		star: number,
		color: Array<string>
	) {
		(this.telephoneName = telephoneName), (this.price = price);
		this.star = star;
		this.color = color;
	}
	show(): string {
		return ` Name: ${this.telephoneName}, Price: ${this.price}, Star: ${this.star}, Color: ${this.color}`;
	}
}

const telephone = new Telephone("Iphone X", 12000, 5, [
	"black",
	"pink",
	"red",
	"green"
]);
console.log(telephone.show());

enum state {
	start = 1,
	processing,
	finish
}

class Work {
	id: string;
	workName: String;
    status: state;

	constructor(id: string, workName: String, status: state) {
		this.id = id;
		this.workName = workName;
		this.status = status;
	}
	show(): string{
		return ` ID: ${this.id}, Name: ${this.workName}, Status: ${this.status}`;
    }
    static run(): string{
        return `Test static`
    }
}

const work = new Work("54df2h3j42k44432", "Learn Nodejs", state.finish);
console.log(work.show());
console.log(Work.run()); // Goi method khong can new doi tuong 

