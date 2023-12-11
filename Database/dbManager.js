const sql = require('mssql/msnodesqlv8');

const config = {
    connectionString: 'Driver=ODBC Driver 17 for SQL Server;Server=ASINPA-DAVIDGG\\SQLEXPRESS;Database=Coffito;Trusted_Connection=yes;',
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true, // Use windows authentication
      enableArithAbort: true
    },
    port: 1433,
    trustServerCertificate: true
  };

module.exports = {
  config
};