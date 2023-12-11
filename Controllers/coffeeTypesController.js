const coffeeTypesManager = require('../Managers/coffeeTypesManager');

function getCoffeeTypesRandom(req, res) {
    const coffeeTypes = coffeeTypesManager.getCoffeeTypesRandom(req.body.amount); 
    res.json(coffeeTypes);
  }

  async function getCoffeeTypes(req, res) {
    const coffeeTypes = await  coffeeTypesManager.getCoffeeTypes(); 
    res.json(coffeeTypes);
  }
  
  module.exports = {
    getCoffeeTypesRandom,
    getCoffeeTypes
  };