/* JavaScript code here */
//task5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

//5a

function addItem(newItem){
    cart.push(newItem);
    console.log(cart);
    
}
var newItem = {name: 'Watch', price:64,quantity:1};
addItem(newItem);
