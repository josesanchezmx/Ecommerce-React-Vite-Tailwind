
/**
 * this function calculates total price of a new order
 * @param {Array} products cartProducts: array of objets 
 * @returns {number} total price
 */

export const totalPrice = (products) => {
   let sum = 0;
   products.forEach(product => sum += product.price)
   return sum
    

}
  