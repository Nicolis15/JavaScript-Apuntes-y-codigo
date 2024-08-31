class love{
    lieing(){
        console.log("I am lieing you!");
    }
}

class Nicolle extends love{
    lieing(){
        super.lieing()
    }
        
}
class maira extends love{
    lieing(){
        console.log("I loved you")
    }
}

var Shebroken = new Nicolle();
var Ibroken = new maira();
Shebroken.lieing()
Ibroken.lieing()


