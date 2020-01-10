var events = require('events');
var util = require('util');
var Person = function (name) {
    this.name = name;
};


var PersonOne = new Person('Sara');
var PersonTwo = new Person('Nato');
var PersonThree = new Person('Tara');

var people = [PersonOne, PersonTwo, PersonThree];
util.inherits(Person, events.EventEmitter);
// => inherits(Kế thừa bởi Person, thực hiện sự kiện EventEmitter)
people.forEach(function (person) {
    person.on('talk', function (msg) {
        console.log(person.name + ' said that : ' + msg);
    });
});

PersonOne.emit('talk', 'Hello World, How are you?');
PersonTwo.emit('talk', 'Hi, I fine, Thank you. And you?');
PersonThree.emit('talk', 'I fine. Thanks!');
