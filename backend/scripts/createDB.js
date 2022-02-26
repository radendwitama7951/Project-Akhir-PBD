/* Module untuk membangun
 * database
 *
 * */

// Gunakan modul mysql
const mysql = require("mysql2");

// Hubungkan database
const database = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	multipleStatements: true
});


// PERINTAH SQL
//
const sql_createDB = `/*
		Perintah untuk membangun database
	*/
	CREATE DATABASE IF NOT EXISTS pbd_project_akhir;
	CREATE TABLE IF NOT EXISTS pbd_project_akhir.tb_anggota
	(
		id int NOT NULL AUTO_INCREMENT,
		nama VARCHAR(127),
		email VARCHAR(127),
		noTelpon VARCHAR(127),
		PRIMARY KEY (id)	
	);
`;

const sql_addData = `/*
		Menambah data
	*/
		INSERT INTO pbd_project_akhir.tb_anggota (nama, email, noTelpon)
		VALUES ?
`;

const values = [
	["Raden", "raden@gmail.com", "08123"],
	["Dwitama", "dwitama@gmail.com", "0812345"],
	["Baliano", "baliano@gmail.com", "0812345"]
];

database.query(sql_createDB,(error, result) => {
		if (error) throw error;
		console.log("Database: Ok");
	});

database.query(sql_addData, [values], (error, result) => {
		if (error) throw error;
		console.log("Database: Ok");
		console.log("Number of records inserted: " + result.affectedRows);
	});



database.end(error => {
	if (error) throw error
	console.log("closing...");
});




// Cek database dan tabel
/*
database.connect( (error) => {
	if (error) throw error;
	// Membaangun database
	// berjaga-jaga jika belum ada
	database.query(sql_createDB,(error, result) => {
		if (error) throw error;
		console.log("Database: Ok");
	});
});

//database.end();




database.releas( error => {
	if (error) throw error
	console.log("closing...");
});

*/


