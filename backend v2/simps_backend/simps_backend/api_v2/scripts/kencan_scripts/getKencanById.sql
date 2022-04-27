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
WHERE kencan_id=%s;
