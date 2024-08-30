

/*
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once
*/  
/*
function letterFlinder(word, match){
    for (var i = 0; i < word.length; i++) {
        if(word[i] == match){
            console.log('Encontre coincidencia: ',match)
        }
        else{
            console.log('no se encontro coincidencia: ',word[i])
        }
    }
}

letterFlinder('test','t')


var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table)//{ legs: 3, color: 'brown', priceUSD: 100 }


var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
*/

/*
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']
*/


var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');

console.log(clothes.length)
var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";


console.log(dog);
console.log('perro'+1);