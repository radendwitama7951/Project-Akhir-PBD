/* Program CRUD Berbasis WEB
 * by Raden Dwitama Baliano
 * 25/2/2022
 *
 * */


// Import semua modul
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
// const {database_project_akhir} = require("./scripts/createDB.js");

// GLOBAL
let sql_query;

// Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());


// database_project_akhir.create();

// Connect database
const database_projectAkhir = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "pbd_project_akhir",
	port: "3306"
});

// check koneksi database
database_projectAkhir.connect(error => {
	if (error) {
		console.log(error, "dberr");
	}
	else console.log("database terhubung ...");
});


// GET semua data
app.get("/anggota", (request, response) => {
	console.log("GET semua user");
	sql_query = `SELECT * FROM tb_anggota`;
	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) {
			console.log(error, "errs");
		};


		if (result.length > 0) {
			response.send({
				message: "Semua data anggota",
				data: result
			});
		};
	});
});


// GET satu data
app.get("/anggota/:id", (request, response) => {
	const getIdData = request.params.id;
	sql_query = `SELECT * FROM tb_anggota WHERE id = ${getIdData}`;

	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) {console.log(error)};
		
		if (result.length > 0) {
			response.send({
				message: "Satu data anggota",
				data: result
			});
		} else {
			response.send({
				message: "Data anggota tidak ditemukan !"
			});
		}
	})
	
});




// CREATE data
app.post("/anggota", (request, response) => {
	console.log("POST data baru");
	let nama = request.body.nama;
	let email = request.body.email;
	let noTelpon = request.body.noTelpon;

	sql_query = `INSERT INTO tb_anggota(nama, email, noTelpon) 
			VALUES ("${nama}", "${email}", "${noTelpon}")`;

	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) console.log(error);

		console.log(result);

		response.send({
			message: "Data dimasukan !"
		});
	});
});

// UPDATE data
app.put("/anggota/:id", (request, response) => {
	console.log("UPDATE data lama", request.body);

	let getIdData = request.params.id;

	let nama = request.body.nama;
	let email = request.body.email;
	let noTelpon = request.body.noTelpon;

	sql_query = `UPDATE tb_anggota SET nama="${nama}", email="${email}", noTelpon="${noTelpon}"
			WHERE id=${getIdData}`;

	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) console.log(error);

		console.log(result);

		if (result.changedRows > 0) {
			response.send({
				message: "Data diperbaharui !"
			});
		} else {
			response.send({
				message: "Data tidak ditemukan !"
			});
		}

	});

});


// DELETE data
app.delete("/anggota/:id", (request, response) => {
	console.log("DELETE anggota pada tabel", request.params.id);

	let getIdData = request.params.id;

	sql_query = `DELETE FROM tb_anggota
			WHERE id=${getIdData}`;
	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) console.log(error);

		console.log(result);

		if (result.affectedRows > 0) {
			response.send({
				message: "Data dihapus !"
			});
		} else {
			response.send({
				message: "Data tidak ditemukan !"
			});
		};
	});
});













// run server di port 3000
app.listen(3000, () => {
	console.log("Server berjalan !");
});


