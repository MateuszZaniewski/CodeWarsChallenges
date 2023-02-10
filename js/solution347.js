// DESCRIPTION:
// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
    let burgers = input.match(/burger+/g)
    let fries = input.match(/fries+/g)
    let chicken = input.match(/chicken+/g)
    let pizza = input.match(/pizza+/g)
    let sandwich = input.match(/sandwich+/g)
    let onionrings = input.match(/onionrings+/g)
    let milkshake = input.match(/milkshake+/g)
    let coke = input.match(/coke+/g)
    
    let orders = []
    if(burgers) {orders.push('Burger '.repeat(burgers.length)) }
    if(fries) {orders.push('Fries '.repeat(fries.length)) }
    if(chicken) {orders.push('Chicken '.repeat(chicken.length)) }
    if(pizza) {orders.push('Pizza '.repeat(pizza.length)) }
    if(sandwich) {orders.push('Sandwich '.repeat(sandwich.length)) }
    if(onionrings) {orders.push('Onionrings '.repeat(onionrings.length)) }
    if(milkshake) {orders.push('Milkshake '.repeat(milkshake.length)) }
    if(coke) {orders.push('Coke '.repeat(coke.length)) }

    return orders.join('').trim()
  }

console.log(getOrder("sandwichcokecokeonionringsonionringschickenburgersandwichpizzamilkshake"))