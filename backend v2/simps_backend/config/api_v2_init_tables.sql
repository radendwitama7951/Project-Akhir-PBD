--
-- Create model Berita
--
CREATE TABLE `api_v2_berita` (
  `berita_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `judul` varchar(128) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `url` varchar(200) NOT NULL,
  `thumbnail` varchar(200) NOT NULL
);

--
-- Create model StatusKencan
--
CREATE TABLE `api_v2_statuskencan` (
  `status_kencan_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `keterangan` varchar(32) NOT NULL
);

--
-- Create model StatusPasangan
--
CREATE TABLE `api_v2_statuspasangan` (
  `status_pasangan_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `keterangan` varchar(32) NOT NULL
);

--
-- Create model User
--
CREATE TABLE `api_v2_user` (
  `user_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `email` varchar(254) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) NOT NULL
);

--
-- Create model Pasangan
--
CREATE TABLE `api_v2_pasangan` (
  `pasangan_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `special_name` varchar(32) NOT NULL,
  `avatar` varchar(200) NOT NULL,
  `kencan_terakhir` date NOT NULL,
  `status_pasangan_id` integer NOT NULL
);

--
-- Create model Kencan
--
CREATE TABLE `api_v2_kencan` (
  `kencan_id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `tanggal` date NOT NULL,
  `jam` time(6) NOT NULL,
  `tempat` longtext NOT NULL,
  `biaya` integer NOT NULL,
  `pasangan_id` integer NOT NULL,
  `status_kencan_id` integer NOT NULL
);

--
-- Create laporan table
--
DROP TABLE IF EXISTS api_v2_laporan;
CREATE TABLE IF EXISTS api_v2_laporan (
  laporan_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  created DATETIME DEFAULT NOW(),
  data JSON
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;

--
-- CONSTRAINT
--
ALTER TABLE
  `api_v2_pasangan`
ADD
  CONSTRAINT `api_v2_pasangan_status_pasangan_id_36baee64_fk_api_v2_st` 
    FOREIGN KEY (`status_pasangan_id`)
    REFERENCES `api_v2_statuspasangan` (`status_pasangan_id`);

ALTER TABLE
  `api_v2_kencan`
ADD
  CONSTRAINT `api_v2_kencan_pasangan_id_1637a9f4_fk_api_v2_pa` 
    FOREIGN KEY (`pasangan_id`) 
    REFERENCES `api_v2_pasangan` (`pasangan_id`);

ALTER TABLE
  `api_v2_kencan`
ADD
  CONSTRAINT `api_v2_kencan_status_kencan_id_3e1a527d_fk_api_v2_st` 
    FOREIGN KEY (`status_kencan_id`) 
    REFERENCES `api_v2_statuskencan` (`status_kencan_id`);
