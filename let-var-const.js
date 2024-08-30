/*var keyword
console.log(user)

var user = "Mary"
var user = "Joanna"
var user = "Mark"
console.log(user)
var user;*/

let user 
var userhola = 5
var userhola = 30

console.log(user)


function print(){
    console.log(user)// error
}

print()


var globalVar = 77;

function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);