const coffeeTypesRepository = require('../Repositories/coffeeTypesRepository');

function getCoffeeTypesRandom(amount) {
    const coffeeTypes = coffeeTypesRepository.getCoffeeTypesRandom(amount); 
    return coffeeTypes;
  }
  
async function getCoffeeTypes(){
    const coffeeTypes = await coffeeTypesRepository.getCoffeeTypes();
    return coffeeTypes;
}
  
  
  module.exports = {
    getCoffeeTypesRandom,
    getCoffeeTypes
  };