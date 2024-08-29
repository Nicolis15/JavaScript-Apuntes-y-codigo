
/*
try{
    console.log(c+d)
}catch(err){
    console.log('Llego el error, es:')
    console.log(err)
}
*/


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


