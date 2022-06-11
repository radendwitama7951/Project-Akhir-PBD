

-- 7/6/2022
ALTER TABLE api_v2_pasangan
ADD COLUMN ulang_tahun DATE AFTER avatar,
ADD COLUMN tanggal_jadian DATE AFTER avatar;

-- 9/6/2022
CREATE VIEW all_berita AS
  SELECT * FROM api_v2_berita;


-- 9/6/2022
DROP PROCEDURE IF EXISTS get_tanggal_penting;
DELIMITER $$
CREATE PROCEDURE get_tanggal_penting ()
BEGIN
	SELECT 
		tanggal_jadian AS tanggal,
		'Tanggal Jadian' AS tipe,
		CONCAT_WS(' ', 'Nama',
				first_name,	
				last_name,
				'\nTerakhir Kencan',
				kencan_terakhir
		) AS deskripsi
	FROM api_v2_pasangan 
	WHERE tanggal_jadian IS NOT NULL

	UNION ALL

	SELECT 
		ulang_tahun AS tanggal,
		'Ulang Tahun Pasangan' AS tipe,
		CONCAT_WS(' ', 'Nama',
				first_name,	
				last_name,
				'Status ',
				StatusPasangan.keterangan,
				'\nTerakhir Kencan',
				kencan_terakhir
		) AS deskripsi
	FROM api_v2_pasangan 
	JOIN api_v2_statuspasangan AS StatusPasangan
		USING(status_pasangan_id)
	WHERE ulang_tahun IS NOT NULL

	--

	UNION ALL

	SELECT 
		tanggal AS tanggal,
		'Kencan' AS tipe,
		CONCAT_WS(' ', 'Pasangan: ', 
				Pasangan.first_name, 
				Pasangan.last_name,
				'\nTempat ',
				tempat) AS deskripsi
	FROM api_v2_kencan 
	JOIN api_v2_pasangan AS Pasangan
		USING(pasangan_id)
	WHERE 
		tanggal IS NOT NULL
		AND
		status_kencan_id != 3; -- NOT KENCAN TERLAKSANA
END $$
DELIMITER ;

CALL get_tanggal_penting()
