module Passport {
	export class Sayhello {
		show(): string {
			return "Hello World";
		}
	}
}
const sayhello = new Passport.Sayhello();
console.log(sayhello.show());
