
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
