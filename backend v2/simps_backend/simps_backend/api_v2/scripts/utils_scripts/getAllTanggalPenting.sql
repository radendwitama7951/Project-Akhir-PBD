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
	'\nUlang Tahun Pasangan' AS tipe,
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
	status_kencan_id != 3;
