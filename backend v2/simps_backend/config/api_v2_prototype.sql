SELECT
	JSON_OBJECT(
			'user_id', api_v2_user.user_id,
      'to_date', '2022-05-01',
      'from_date', '2022-05-31',
      'pengeluaran', JSON_OBJECT (
          'tanggal', JSON_ARRAY(
            "2022-05-07",
            "2022-05-12",
            "2022-05-21",
            "2022-05-08",
            "2022-05-08",
            "2022-05-31",
            "2022-05-10"
          ),
          'biaya', JSON_ARRAY(
            "35000",
            "500000",
            "45000",
            "10000",
            "200000",
            "69000",
            "12000"
          )
      ),
      'rasio_pasangan_kencan', JSON_OBJECT (
        'status_pasangan', JSON_ARRAY (
          'mantan', 'pacar', 'selingkuhan'
        ),
        'rasio_kencan', JSON_ARRAY (
          3,4,0
        )
      ),
      'pasangan_kencan_teratas', JSON_ARRAY (
        JSON_OBJECT (
          "pasangan_id", 16,
          "first_name", "Mulan",
          "last_name", "Jamulan",
          "special_name", "Mul",
          "avatar", "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
          "kencan_terakhir", "2022-04-27",
          "status_pasangan_id", 0,
          "pasangan_status", "mantan",
          "total_kencan", 1
        ),
        JSON_OBJECT (
          "pasangan_id", 16,
          "first_name", "Mulan",
          "last_name", "Jamulan",
          "special_name", "Mul",
          "avatar", "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
          "kencan_terakhir", "2022-04-27",
          "status_pasangan_id", 0,
          "pasangan_status", "mantan",
          "total_kencan", 1
        ),
        JSON_OBJECT (
          "pasangan_id", 16,
          "first_name", "Mulan",
          "last_name", "Jamulan",
          "special_name", "Mul",
          "avatar", "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
          "kencan_terakhir", "2022-04-27",
          "status_pasangan_id", 0,
          "pasangan_status", "mantan",
          "total_kencan", 1
        ),
        JSON_OBJECT (
          "pasangan_id", 16,
          "first_name", "Mulan",
          "last_name", "Jamulan",
          "special_name", "Mul",
          "avatar", "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
          "kencan_terakhir", "2022-04-27",
          "status_pasangan_id", 0,
          "pasangan_status", "mantan",
          "total_kencan", 1
        ),
        JSON_OBJECT (
          "pasangan_id", 16,
          "first_name", "Mulan",
          "last_name", "Jamulan",
          "special_name", "Mul",
          "avatar", "https://www.petwellnessaz.com/wp-content/uploads/2020/07/blank-profile-picture-973460_640-300x300-1-300x300.png",
          "kencan_terakhir", "2022-04-27",
          "status_pasangan_id", 0,
          "pasangan_status", "mantan",
          "total_kencan", 1
        )
      )
    ) 
AS laporan
FROM api_v2_user
WHERE user_id = 1;
