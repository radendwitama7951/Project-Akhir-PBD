--
-- 1. Pengeluaran
--

--
-- 2. Rasio Pasangan Kencan
--

--
-- 3. Pasangan Favorit
--
CREATE DEFINER=`um0plwjtknyeyriw`@`%` PROCEDURE `PasanganKencanTeratas`(IN dari DATETIME, IN sampai DATETIME)
BEGIN
	SELECT b.pasangan_id, b.first_name, b.last_name, b.special_name,
    b.avatar, b.kencan_terakhir, b.status_pasangan_id, c.keterangan AS pasangan_status
    , COUNT(a.kencan_id) AS total_kencan
	FROM api_v2_pasangan b JOIN api_v2_statuspasangan c
    ON b.status_pasangan_id=c.status_pasangan_id
    JOIN api_v2_kencan a ON a.pasangan_id=b.pasangan_id
    WHERE a.tanggal BETWEEN dari AND sampai
    GROUP BY b.pasangan_id
	  HAVING COUNT(a.kencan_id) >= 5
    ORDER BY  COUNT(a.kencan_id) DESC
    LIMIT 5;
END


-- @v2
-- Get Pasangan Terfavorit
-- 
DROP PROCEDURE IF EXISTS get_pasangan_kencan_teratas;
DELIMiTER $$
CREATE PROCEDURE get_pasangan_kencan_favorit(
	IN from_tanggal date,
	IN to_tanggal date,
  OUT result json
)
BEGIN
	DECLARE done INT DEFAULT FALSE;
    
	DECLARE 	
		first_name,
		last_name,
		status_pasangan,
		special_name
    VARCHAR(32);
	DECLARE
		avatar
    VARCHAR(200);
	DECLARE
		kencan_terakhir
    DATE;
	DECLARE
		pasangan_id,
		status_pasangan_id,
		total_kencan
    INT;	
    
  DECLARE cursor_pasangan CURSOR FOR 
    SELECT
      b.pasangan_id, 
      b.first_name, 
      b.last_name, 
      b.special_name,
      b.avatar, 
      b.kencan_terakhir, 
      b.status_pasangan_id, 
      c.keterangan, 
      COUNT(a.kencan_id)
    FROM api_v2_pasangan AS b 
      JOIN api_v2_statuspasangan AS c
        ON b.status_pasangan_id=c.status_pasangan_id
      JOIN api_v2_kencan AS a 
        ON a.pasangan_id=b.pasangan_id
	WHERE a.tanggal BETWEEN from_tanggal AND to_tanggal
    GROUP BY b.pasangan_id
    ORDER BY  COUNT(a.kencan_id) DESC
    LIMIT 5;
        
  DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET done = TRUE;

	OPEN cursor_pasangan;
    
  --- Initial state
	SET result = '[]';

	loop_cursor: LOOP
		FETCH cursor_pasangan
			INTO
				pasangan_id,
				first_name,
				last_name,
				special_name,
				avatar,
				kencan_terakhir,
				status_pasangan_id,
				status_pasangan,
				total_kencan;

    IF done THEN
      LEAVE loop_cursor;
	END IF;
	SET result = JSON_ARRAY_APPEND(
		result,
    '$',
		JSON_OBJECT(
			'pasangan_id', pasangan_id,
			'first_name', first_name,
			'last_name', last_name,
			'special_name', special_name,
			'avatar', avatar,
			'kencan_terakhir', kencan_terakhir,
			'status_pasangan_id', status_pasangan_id,
			'status_pasangan', status_pasangan,
			'total_kencan', total_kencan
    )
	);
  END LOOP;
  

  CLOSE cursor_pasangan;



END$$

DELIMITER ;

-- @v2
-- Get pengeluaran
--
DROP PROCEDURE IF EXISTS get_pengeluaran;
DELIMiTER $$
CREATE PROCEDURE get_pengeluaran(
	IN from_tanggal date,
	IN to_tanggal date,
  OUT result json
)
BEGIN
	DECLARE done INT DEFAULT FALSE;
    
    DECLARE tanggal DATE;
    DECLARE biaya INT;    
    
	DECLARE cursor_pengeluaran CURSOR FOR 
		SELECT api_v2_kencan.tanggal, api_v2_kencan.biaya FROM api_v2_kencan
		WHERE api_v2_kencan.tanggal BETWEEN from_tanggal AND to_tanggal;
		
	DECLARE CONTINUE HANDLER FOR NOT FOUND
		SET done = TRUE;

	OPEN cursor_pengeluaran;

  --- Initial State
	SET result = '{
		"tanggal": [ ],
        "biaya": [ ]
    }';

	loop_cursor: LOOP
		FETCH cursor_pengeluaran
			INTO
				tanggal,
        biaya;
                
		IF done THEN
		  LEAVE loop_cursor;
		END IF;
        
        SET result = JSON_ARRAY_APPEND(result, 	'$.tanggal', tanggal, 
												                        '$.biaya', biaya);

        
		
	END LOOP;


	CLOSE cursor_pengeluaran;

END$$

DELIMITER ;


-- @V2
-- Get Rasio_pasangan_kencan
--
DROP PROCEDURE IF EXISTS get_rasio_pasangan_kencan;
DELIMiTER $$
CREATE PROCEDURE get_rasio_pasangan_kencan(
	IN from_tanggal date,
	IN to_tanggal date,
  OUT result json
)
BEGIN
	DECLARE done INT DEFAULT FALSE;
    
    DECLARE status_pasangan VARCHAR(32);
    DECLARE total_kencan INT;    
    
	DECLARE cursor_rasio_pasangan CURSOR FOR 
		SELECT 
			b.keterangan, 
			COUNT(a.pasangan_id)
		FROM api_v2_pasangan a 
			JOIN api_v2_statuspasangan b
				ON a.status_pasangan_id=b.status_pasangan_id
			JOIN api_v2_kencan c 
				ON c.pasangan_id=a.pasangan_id
		WHERE c.tanggal BETWEEN from_tanggal AND to_tanggal
		GROUP BY b.status_pasangan_id;
		
	DECLARE CONTINUE HANDLER FOR NOT FOUND
		SET done = TRUE;

	OPEN cursor_rasio_pasangan;

	SET result = '{
		"status_pasangan": [ ],
    "total_kencan": [ ]
  }';

	loop_cursor: LOOP
		FETCH cursor_rasio_pasangan
			INTO
				status_pasangan,
        total_kencan;
                
		IF done THEN
		  LEAVE loop_cursor;
		END IF;
        
        SET result = JSON_ARRAY_APPEND(result, 	'$.status_pasangan', status_pasangan, 
											                        	'$.total_kencan', total_kencan);

        
		
	END LOOP;


	CLOSE cursor_rasio_pasangan;

END$$

DELIMITER ;


