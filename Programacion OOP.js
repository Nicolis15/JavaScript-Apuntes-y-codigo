let puchase1 = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice : function(){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}

puchase1.totalPrice();


let puchase2 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function(){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}

puchase2.totalPrice()