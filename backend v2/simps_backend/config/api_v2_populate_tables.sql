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
