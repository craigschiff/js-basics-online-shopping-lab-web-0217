var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({ [item] : price})
  console.log(`${item} has been added to your cart.`)
  setCart(cart)
  return getCart()
}
function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else{
    console.log("In your cart, you have ")
    for (let i = 0; i < cart.length; i +=1){
      for (let item in cart[i]){
      console.log(`${item} at $${cart[i][item]}`)
    }
    }
  }


}


function removeFromCart(item){
  // for (let i = 0; i < cart.length; i +=1){
    // if (Object.keys(cart).includes(item)){
      // let index = Object.keys(cart).indexOf(item)
      // cart
      for (let i = 0; i <cart.length; i+=1){
        if (Object.keys(cart[i])[0] === `${item}`){
          delete cart[i]
          const printCart = cart.map((item) => {
            let key = Object.keys[item][0]
            let price = Object.keys[item][0]
            return `${key} at ${price}`

          })
          console.log(`In your cart you have ${printCart.join(", ")}.`)
        }
  // else {
  //   console.log("That item is not in your cart.")
  // }
}
  console.log("That item is not in your cart.")

}

function placeOrder (card) {
  if (card === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
}else {
  `Your total cost is $${total()}, which will be charged to the card ${card}.`
}
cart.length = 0
}
