
class car{
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("Turbo is On!");
    }
}
const car1 = new car("red", 120);
car1.turboOn();
console.log(car1);

class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

