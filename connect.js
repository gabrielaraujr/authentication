process.env.ORA_SDTZ = 'UTC';

const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

async function db() {
  let connection;

  try {

    connection = await oracledb.getConnection(dbConfig);

    const options = {
      autoCommit: true,
      outFormat: oracledb.OUT_FORMAT_OBJECT
    };

    const result = await connection.execute(sql, binds, options);

    console.log(result.rows);
    // return result.rows;

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports = db;
