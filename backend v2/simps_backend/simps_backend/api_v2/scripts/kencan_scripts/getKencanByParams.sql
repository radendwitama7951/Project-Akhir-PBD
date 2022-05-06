SELECT
  kencan_id,
  tanggal,
  jam,
  tempat,
  pasangan_id,
  CONCAT(first_name, ' ', last_name) AS pasangan,
  biaya,
  status_kencan_id,
  api_v2_statuskencan.keterangan AS status_kencan 
FROM api_v2_kencan
JOIN api_v2_statuskencan
  USING (status_kencan_id)
JOIN api_v2_pasangan
  USING (pasangan_id)
WHERE
(
  (
    CONCAT_WS(' ', api_v2_pasangan.first_name, api_v2_pasangan.last_name)
    LIKE %s
  )
  OR
  (
    api_v2_kencan.tempat
    LIKE %s
  )
  OR
  (
    api_v2_kencan.tanggal
    LIKE %s
  )
)
AND
(
  api_v2_kencan.tanggal
    BETWEEN 
      %s 
    AND 
      %s
)
ORDER BY api_v2_kencan.tanggal;
