
// const mysql = require("mysql2")
// const is_heroku = process.env.IS_HEROKU || false;


// let database;

// const dbConfigHeroku = {
// 	host: "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// 	user: "hct0x5slkt8i1bgn",
// 	password: "o9dc7b1zw1ho9812",
// 	database: "ht3fknlbys0qeor5",
// 	multipleStatements: false,
// 	namedPlaceholders: true
// };

// const dbConfigLocal = {
// 	host: "localhost",
// 	user: "root",
// 	password: "root",
// 	database: "localscoop",
// 	port: 3306,
// 	multipleStatements: false,
// 	namedPlaceholders: true
// };






// if (is_heroku) {
// 	database = mysql.createPool(dbConfigHeroku).promise();
// }
// else {
// 	database = mysql.createPool(dbConfigLocal).promise();
// }



// /**
//  * @returns all the stores in the database
//  */
// function getStores(){
// 	return database.query(`
// 		SELECT * 
// 		FROM store
// 	`)
// }
// exports.getStores = getStores


// function getStore(storeID){
// 	return database.query(`
// 		SELECT * 
// 		FROM store
// 		WHERE store_name = ?`)
// }





// // module.exports = database;

