function scopeTest() { var y = 44; console.log(x); }

scopeTest();

var x = 33; 


function count(...food) { console.log(food.length) } 
count("Burgers", "Fries", null);

const [a, b, ...rest] = [1,2,3,4]
console.log(rest)