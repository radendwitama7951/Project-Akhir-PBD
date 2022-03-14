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
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With");
  next();
});
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept");
	next();

})
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
/* Semua data anggota */
app.get("/anggota", (request, response) => {
	response.set('Access-Control-Allow-Origin', '*');
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

/* Semua data mantan */
app.get("/admin/manage/mantan", cors(), (request, response, next) => {
	response.set('Access-Control-Allow-Origin', 'http://localhost:4200');
	console.log("GET semua data mantan");
	sql_query = `SELECT id, prioritas, nama_spesial, kencan_terakhir FROM mantan`;
	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) {
			console.log(error, "errs");
		};

		if (result.length > 0) {
			response.send({
				message: "Semua data mantan",
				data: result
			});
		};

	});

} );



// GET satu data
/* GET anggota by id */
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
				message: "Data anggota tidak ditemukan !",
				data: {}
			});
		}
	})
	
});

/* GET mantan by id */
app.get("/admin/manage/mantan/:id", (request, response) => {
	const getIdData = request.params.id;
	let sql_query = `SELECT * FROM mantan WHERE id = ${getIdData}`;

	database_projectAkhir.query(sql_query, (error, result) => {
		if (error) {
			console.log(error);
		};

		if (result.length > 0) {
			response.send({
				message: `Mantan ID ${getIdData}`,
				data: result
			});
		} else {
			response.send({
				message: `Mantan ID ${getIdData} tidak ditemukan !`,
				data: {}
			});
		};
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
	console.log("Server berjalan di port : " + 3000);
});


