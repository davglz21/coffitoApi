const sql = require('mssql/msnodesqlv8');
const dbManager = require('../Database/dbManager');


function getCoffeeTypesRandom(amount) {
    const types = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Mocha', 'Macchiato', 'Flat White'];
    const randomTypes = [];
    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(Math.random() * types.length);
      randomTypes.push(types[randomIndex]);
    }
    return randomTypes;
  }

  async function getCoffeeTypes() {
    try {
      const pool = await sql.connect(dbManager.config);
      const result = await pool.request().query('SELECT * FROM [dbo].[CoffeeTypes]');
      return result.recordset;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  module.exports = {
    getCoffeeTypesRandom,
    getCoffeeTypes
  };