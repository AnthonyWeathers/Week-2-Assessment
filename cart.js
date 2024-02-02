///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((priceSum, food) => priceSum += food.price, 0)

//console.log("The total price of buying pizza, pasta, and salad together is: " + summedPrice)
// summedPrice = 26.97

/* CALLBACK HERE )*/


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const cartTotalTax = cartTotal * tax
    const finalCartTotal = cartTotalTax + cartTotal - couponValue
    return finalCartTotal
}
// console.log(calcFinalPrice(15, 5, 0.04))
// finalCartTotal = 10.6 assuming by "Subtract the value of the coupon" means its a flat value coupon and not a percent coupon

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    items, this would be an array of objects indicating the items the customer has in their cart, and the prices of each item

    contact info, this would be an object of the customer, since cart page means a customer is ordering from the restaurant from their website so they would provide their name and a phone number to confirm the order

    coupon, this would be if a customer applies a coupon so the price of their cart would be reduced. Will be a boolean as the coupon value will be applied if the customer enters a valid coupon for the restaurant

    extraCharges, this would involve tax and the fee for delivery, added onto the totalCost of the order. Chose to represent them as an object because they're separate charges with assigned different values but fall under the same classification for me

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    items : {
        pasta : 6.50,
        spinach : 5
    },
    contactInfo : {
        name : "Anthony Weathers",
        phoneNumber : "20533" // fake number, just filling out this section
},
    coupon : true,
    extraCharges : {
        tax : 0.06,
        delivery : 0.05
    }
}

// console.log(customer)