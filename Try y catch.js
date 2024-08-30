
/*
try{
    console.log(c+d)
}catch(err){
    console.log('Llego el error, es:')
    console.log(err)
}
*/

/*
function addTwoNums(a, b){
    try{
        if(typeof(a) != 'number'){
            throw new ReferenceError('The first number is not a number')
        }else if(typeof(b) != 'number'){
            throw new ReferenceError('The second number is not a number')
        }else{
            console.log(a + b);
        }

    }catch(e){
        console.log(e);
    }
}
addTwoNums('5', 5);
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")


