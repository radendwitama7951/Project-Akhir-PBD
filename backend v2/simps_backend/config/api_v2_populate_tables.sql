--- 1. Tambah Data Berikut ke tabel api_v2_statuspasangan
---     status_pasangan_id  keterangan
---     0                   'Mantan'
---     1                   'Pacar'
---     2                   'Selingkuhan'
---
--- Query:

--- 2. Tambah Data Berikut ke Tabel api_v2_statuskencan
---     status_kencan keterangan
---     0             'Terjadwal'
---     1             'Sedang Berlangsung'
---     2             'Terlaksana'
---     3             'Batal'
---     4             'Menjadwalkan Ulang'
---
--- Query


--- 3. Isi tabel pasangan dengan setidaknya 30 data. 
---   Dimana terdapat 10 data dengan fields status_pasangan_id bernilai 0,
---   10 data dengan fields status_pasangan_id bernilai 1, dan
---   10 data dengan fields status_pasangan_id bernilai 2
---
--- Query

--- 4. Isi tabel kencan dengan setidaknya 30 data.
---   Dimana data memetakan setiap pasangan_id.
---   Dengan rentang tanggal pada field `tanggal` dimulai dari 1-1-2022 hingga 31-5-2022 (FORMAT: DD-MM-YYYY)
---
--- Query

--- 5. Isi tabel berita dengan setidaknya 10 data.
---   Dimana fields `deskripsi` memiliki panjang antara 64 sampai 128 karakter.
---   Isi thumbnail berita dengan url gambar berukuran 400x200px (LxT)
---   Isi url berita dengan url berita sembarang
---
--- Query


--- Perhatikan tabel pasangan, berita, dan kencan memiliki id AUTO_INCREMENT, 
--- jangan memasukan valuenya dengan manual !
--- Taruh Query dibawah pertanyaan, uji lebih dahulu querymu !
--- Silakan gunakan data random dengan random data generator
---
--- Contoh:
INSERT INTO `api_v2_user` 
  (
    `email`,
    `first_name`,
    `last_name`,
    `password`,
    `last_login`
  )
VALUES
  (
    'radenganteng@xxx.com',
    'Raden Dwitama',
    'Ganteng',
    'jf2jf1889jf01jf8fhcoh2',
    NOW()
  );

-- laporan
INSERT INTO `api_v2_laporan`
(
	data
)
VALUES
(
	'
    {
        "user_id": 1,
        "from_date": "2022-05-01",
        "to_date": "2022-05-31",
        "pengeluaran": {
			"tanggal": ["2022-05-07",
						"2022-05-12",
						"2022-05-21",
						"2022-05-08",
						"2022-05-08",
						"2022-05-31",
						"2022-05-10"],
            "biaya": [	"35000",
						"500000",
						"45000",
						"10000",
						"200000",
						"69000",
						"12000"]
        },
        "rasio_pasangan_kencan": {
			"status_pasangan": ["mantan", "pacar", "selingkuhan"],
            "rasio_kencan": [3,4,0]
        },
        "pasangan_kencan_teratas": [
			 {
			   "pasangan_id": 16,
			   "first_name": "Mulan",
			   "last_name": "Jamulan",
			   "special_name": "Mul",
			   "avatar": "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
			   "kencan_terakhir": "2022-04-27",
			   "status_pasangan_id": 0,
			   "pasangan_status": "mantan",
			   "total_kencan": 1
			 },
			 {
			   "pasangan_id": 17,
			   "first_name": "Maria",
			   "last_name": "Ozawa",
			   "special_name": "Miyabi",
			   "avatar": "https://1.bp.blogspot.com/-NlKdiGY5RJI/VYfVkm6BmuI/AAAAAAAAALk/9TdKOrIt9Aw/s1600/Gambar+Kata+Ucapan+Puasa+Miyabi+Mario+Ozawa+DP+BBM+Bergerak+1.jpg",
			   "kencan_terakhir": "2022-04-27",
			   "status_pasangan_id": 0,
			   "pasangan_status": "mantan",
			   "total_kencan": 1
			 },
			 {
			   "pasangan_id": 13,
			   "first_name": "Ketut Mita",
			   "last_name": "Sari",
			   "special_name": "Mimit",
			   "avatar": "https://www.superprof.co.id/gambar/guru/rumah-guru-mahasiswa-ekonomi-dengan-pengalaman-kerja-selama-tahun-menawarkan-kursus-pelajaran-ekonomi-pemasaran-manajemen-sdm-dan-sebagainya.jpg",
			   "kencan_terakhir": "2022-04-28",
			   "status_pasangan_id": 1,
			   "pasangan_status": "pacar",
			   "total_kencan": 1
			 },
			 {
			   "pasangan_id": 2,
			   "first_name": "Lastri",
			   "last_name": "Lestari",
			   "special_name": "Lala",
			   "avatar": "https://www.ppt4kids.com/wp-content/uploads/2022/01/Featured-Image-Size-9-980x551.png",
			   "kencan_terakhir": "2022-04-29",
			   "status_pasangan_id": 1,
			   "pasangan_status": "pacar",
			   "total_kencan": 1
			 },
			 {
			   "pasangan_id": 8,
			   "first_name": "Cynthia",
			   "last_name": "Charawista",
			   "special_name": "Cicin",
			   "avatar": "https://bracketfights.com/images/templates/2019/16559/random-gg-members-16559/iujpg.png",
			   "kencan_terakhir": "2022-04-27",
			   "status_pasangan_id": 1,
			   "pasangan_status": "pacar",
			   "total_kencan": 1
			 }
		]
    }
    '
);
